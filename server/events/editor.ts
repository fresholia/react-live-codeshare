import * as socketio from 'socket.io';

import { ICodeBlocks } from 'types/codeview';

import { CodeController } from '../controllers/editor.controller'

interface CodeControllerType {
    [room: string]: any
}

const rooms: CodeControllerType = {}

const handleEvents = (client: socketio.Socket, io: socketio.Server) => {
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
}

export default handleEvents