import * as socketio from 'socket.io';
interface SocketClientsType {
    [client: socketio.Socket]: string;
}

export { SocketClientsType }