
import SocketIO, { Socket } from 'socket.io-client'

import variables from '../../variables'

let socket: Socket

const updateClients = (room: string, content: string) => {
    if (socket) {
        socket.emit('updateCode', room, content)
    }
}

const updateLangData = (room: string, content: string) => {
    if (socket) {
        socket.emit('setlang', room, content)
    }
}

const SocketProvider = (pageNumber: string, setContent: Function, setPageData: Function) => {
    if (!socket) {
        socket = SocketIO()
        
        socket.emit('setroom', pageNumber)

        socket.on('disconnect', () => {
            console.log('Socket disconnected.')
        })

        socket.on('updatelang', (lang: string) => {

        })

        socket.on('codeDetails', (data: any) => {
            data.content = typeof (data.content) == 'string' ? JSON.parse(data.content) : data.content
            setPageData(data)
        })

        socket.on('updateCode', (content: string) => {
            const data = JSON.parse(content)

            
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

        socket.on('status', (str: string) => {
            console.log(str.toString())
        })
    }
}

export { SocketProvider, updateClients, updateLangData, socket }