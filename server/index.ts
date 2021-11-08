import express, { Express, Request, Response } from 'express';
import * as http from 'http';
import next, { NextApiHandler } from 'next';
import * as socketio from 'socket.io';

import { CodeController } from './controllers/code/CodeController'
require('dotenv').config();
const port: number = parseInt(process.env.PORT || '3000', 10);

const dev: boolean = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const nextHandler: NextApiHandler = nextApp.getRequestHandler();

import {CodeControllerType} from './types/CodeControllerType.d'

const rooms: CodeControllerType = {}

nextApp.prepare().then(async() => {
    const app: Express = express();
    const server: http.Server = http.createServer(app);
    const io: socketio.Server = new socketio.Server();
    io.attach(server);

    io.on('connection', (client: socketio.Socket) => {
        client.emit('status', 'Hello from Socket.io');

        client.on('disconnect', () => {
            console.log('client disconnected');
        })

        client.on('setroom', (room: string) => {
            client.join(room);

            if (!rooms[room]) {
                rooms[room] = new CodeController(room)
                console.log(`${room} created!`)
            }

            rooms[room].getContent((content: any) => {
                client.emit('codeDetails', content)
            }) 

            console.log(`client: joined ${room} room`)
        })

        client.on('updateCode', (room: string, content: Array<string>) => {
            if (rooms[room]) {
                rooms[room].setContent(content)
            }

            io.to(room).emit('updateCode', content)
        })

        client.on('setlang', (room: string, lang: string) => {
            io.to(room).emit('updatelang', lang)
        })
    });

    app.all('*', (req: any, res: any) => nextHandler(req, res));

    server.listen(port, () => {
        console.log(`> Ready on http://localhost:${port}`);
    });
});