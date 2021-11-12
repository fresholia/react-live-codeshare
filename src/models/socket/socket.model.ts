
import SocketIO, { Socket } from 'socket.io-client'

import { IClientActions, ICodeBlocks } from '../../types/codeview.type'

export let socket: Socket

export function updateClients(room: string, content: string, localClientPosition: IClientActions) {
    if (socket) {
        socket.emit('updateCode', room, content, localClientPosition)
        return true
    }
    return false
}

export function updateCodeData(room: string, data: string, value: string | number | string[]) {
    if (socket) {
        socket.emit('updateCodeData', room, data, value)
    }
}

export function setClientRoom(room: string, name: string) {
    if (socket) {
        socket.emit('setroom', room, name)
    }
}

export function SocketProvider(handleSetPageData: Function, handleSetClients: Function) {
    if (!socket) {
        socket = SocketIO()

        socket.on('codeDetails', (data: ICodeBlocks, ipaddr: string, clients: IClientActions[]) => {
            handleSetPageData(data)

            if (clients) {
                handleSetClients(clients)
            }
        })

        socket.on('updateCode', (content: string[], clients: IClientActions[]) => {
            /*
            codeContentFromSocket = JSON.parse(content)

            if (typeof codeContentFromEditor === 'undefined') {
                codeContentFromEditor = []
            }

            for (let i = 0; i < Math.min(codeContentFromSocket.length, variables.maxLengthPerPage); i++) {
                const fromSocketRow = codeContentFromSocket.indexOf(i.toString())
                const fromEditorRow = codeContentFromEditor.indexOf(i)
                if (fromSocketRow != fromEditorRow) {
                    //console.log(`C2G > Before(line:${i}): ${fromEditorRow}`, '\n', `C2G > After(line:${i}): ${fromSocketRow}`)
                    
                    codeContentFromEditor[i] = codeContentFromSocket[i]
                }
            }
            setContent(codeContentFromEditor)
            */
        })
    }

    return true
}