import express, { Express, Request, Response } from 'express';

import * as http from 'http';

import next, { NextApiHandler } from 'next';

import * as socketio from 'socket.io';

import { ICodeBlocks } from 'types/codeview';

import { CodeController } from './controllers/editor.controller'

import app from './app';

require('dotenv').config();
const port: number = parseInt(process.env.PORT || '3000', 10);

const dev: boolean = true;// process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const nextHandler: NextApiHandler = nextApp.getRequestHandler();
interface CodeControllerType {
    [room: string]: any
}

const rooms: CodeControllerType = {}

nextApp.prepare().then(async() => {
    const socketApp: Express = app;
    const server: http.Server = http.createServer(socketApp);
    const io: socketio.Server = new socketio.Server();

    io.attach(server);

    io.on('connection', (client: socketio.Socket) => {
        client.on('disconnect', () => {
            const room = client.handshake.auth.room;
            if (room && rooms[room]) {
                rooms[room].removeClient(client.id)
            }
        })

        client.on('code.setRoom', (room: string, name: string) => {
            client.join(room);
            client.handshake.auth.room = room

            if (!rooms[room]) {
                rooms[room] = new CodeController(room)
            }

            rooms[room].getContent((data: ICodeBlocks) => {
                const ipaddr = client.handshake.address
                rooms[room].addClient(client.id, name, ipaddr)

                data.clientId = client.id

                client.emit('code.get', data, ipaddr, rooms[room].getClients())
            })
        })

        client.on('code.sync', (room: string, content: string[], codePosition: ICodeBlocks) => {
            if (rooms[room]) {
                rooms[room].setCodeContent(content)
                rooms[room].setClientData(client.id, codePosition)
            }

            io.to(room).emit('code.update', content, rooms[room].getClients())
        })

        client.on('code.updateData', (room: string, data: string, value: string | number | string[]) => {
            if (rooms[room]) {
                rooms[room].updateCache(data, value)
            }
        })
    });

    socketApp.all('*', (req: any, res: any) => nextHandler(req, res));
    server.listen(port);
});

export default rooms