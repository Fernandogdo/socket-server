import { Socket } from "socket.io";
import  SocketIO  from "socket.io";

export const desconectado = (cliente: Socket) => {
    cliente.on('disconnect', () => {
        console.log("cliente desconectado")
    });
}


//Escuchar mensajes
export const mensaje = (cliente: Socket, io:SocketIO.Server) => {
    cliente.on('mensaje', (payload: { de: string, cuerpo: string }) => {
        console.log('Mensaje recibido', payload);

        io.emit('mensaje-nuevo', payload)

    });
}