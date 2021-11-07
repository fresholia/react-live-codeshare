import express, { Express, Request, Response } from 'express';
import * as http from 'http';
import next, { NextApiHandler } from 'next';
import * as socketio from 'socket.io';
import { Client } from 'socket.io/dist/client';

import { SocketClientsType } from './types/SocketTypes.d'

const port: number = parseInt(process.env.PORT || '3000', 10);
const dev: boolean = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const nextHandler: NextApiHandler = nextApp.getRequestHandler();

nextApp.prepare().then(async() => {
    const app: Express = express();
    const server: http.Server = http.createServer(app);
    const io: socketio.Server = new socketio.Server();
    io.attach(server);

    io.on('connection', (client: socketio.Socket) => { // client
        console.log('connection');
        client.emit('status', 'Hello from Socket.io');

        client.on('disconnect', () => {
            console.log('client disconnected');
        })

        client.on('setroom', (room: string) => {
            client.join(room);
            console.log(`client: joined ${room} room`)
        })

        client.on('updateCode', (room: string, content: string) => {
            io.to(room).emit('updateCode', content)
        })
    });

    app.all('*', (req: any, res: any) => nextHandler(req, res));

    server.listen(port, () => {
        console.log(`> Ready on http://localhost:${port}`);
    });
});