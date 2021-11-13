
import SocketIO, { Socket } from 'socket.io-client'

import { IClientActions, ICodeBlocks } from 'types/codeview.type'

export let socket: Socket

export function updateClients(room: string, content: string[], localClientPosition: IClientActions) {
    if (socket) {
        socket.emit('code.sync', room, content, localClientPosition)

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

export function SocketProvider() {
    if (!socket) {
        socket = SocketIO()
    }

    return true
}