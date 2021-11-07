
import SocketIO, { Socket } from 'socket.io-client'

let socket: Socket
let codeContentFromSocket: string
let codeContentFromEditor: any

const updateClients = async (room: string, content: string) => {
    if (socket) {
        socket.emit('updateCode', room, content)
    }
}

const SocketProvider = (pageNumber: string, codeContent: string, setContent: Function) => {
    if (!socket) {
        socket = SocketIO()
        socket.emit('setroom', pageNumber)

        socket.on('disconnect', () => {
            console.log('Socket disconnected.')
        })

        socket.on('updateCode', (content) => {
            console.log('Socket.io > new code data')

            codeContentFromSocket = JSON.parse(content)

            for (let i = 0; i < codeContentFromSocket.length; i++) {
                const fromSocketRow = codeContentFromSocket[i]
                const fromEditorRow = codeContentFromEditor[i]
                if (fromSocketRow != fromEditorRow) {
                    //console.log(`C2G > Before(line:${i}): ${fromEditorRow}`, '\n', `C2G > After(line:${i}): ${fromSocketRow}`)
                    
                    codeContentFromEditor[i] = codeContentFromSocket[i]
                }
            }
            setContent(codeContentFromEditor)
        })

        socket.on('status', (str: string) => {
            console.log(str.toString())
        })
    }
    if (codeContent) {
        codeContentFromEditor = codeContent.split('\n')
    }
}

export { SocketProvider, updateClients, socket, codeContentFromSocket }