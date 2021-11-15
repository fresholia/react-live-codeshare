import express, { Express, Request, Response } from 'express';

import * as http from 'http';

import next, { NextApiHandler } from 'next';

import * as socketio from 'socket.io';

import handleEvents from './events/editor';

import app from './app';

require('dotenv').config();
const port: number = parseInt(process.env.PORT || '3000', 10);

const dev: boolean = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const nextHandler: NextApiHandler = nextApp.getRequestHandler();

nextApp.prepare().then(async() => {
    const socketApp: Express = express();
    const server: http.Server = http.createServer(socketApp);
    const io: socketio.Server = new socketio.Server();

    io.attach(server);

    io.on('connection', (client: socketio.Socket) => {
        handleEvents(client, io)
    });

    socketApp.all('*', (req: any, res: any) => nextHandler(req, res));
    server.listen(port);
    app.listen(3001);

    return true
});
