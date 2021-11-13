
import SocketIO, { Socket } from 'socket.io-client'

import { IClientActions, ICodeBlocks } from 'types/codeview.type'

export let socket: Socket

let socketCachedContent: string[] = []

let socketCallback: Function

export function updateClients(room: string, content: string[], localClientPosition: IClientActions) {
    if (socket) {
        socket.emit('code.sync', room, content, localClientPosition)
        socketCachedContent = content
        return true
    }
    return false
}

export function updateCodeData(room: string, data: string, value: string | number | string[]) {
    if (socket) {
        socket.emit('code.updateData', room, data, value)
    }
}

export function setClientRoom(room: string, name: string) {
    if (socket) {
        socket.emit('code.setRoom', room, name)
    }
}

export function handleSocketEvents() {
    if (socket) {
        socket.on('code.get', (data: ICodeBlocks, ipaddr: string, clients: IClientActions[]) => {
            socketCallback({type: 'SET_EDITOR_CONFIG', payload: data})

            if (clients) {
                socketCallback({type: 'SET_CLIENTS_ACTIONS', payload: clients})
            }
        })

        socket.on('code.update', (content: string[], clients: IClientActions[]) => {
            let localClientContent = socketCachedContent
            for (let i = 0; i < content.length; i++) {
                let localContent = localClientContent[i]
                let newContent = content[i]
                if (localContent != newContent) {
                    localClientContent[i] = newContent
                }
            }
            socketCallback({type: 'UPDATE_EDITOR_CONTENT', payload: localClientContent})
        })
    }
}

export function SocketProvider(callback: Function) {
    socketCallback = callback
    if (!socket) {
        socket = SocketIO()
        handleSocketEvents();
    }
   
    return true
}