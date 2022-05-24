"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mensaje = exports.desconectado = void 0;
const desconectado = (cliente) => {
    cliente.on('disconnect', () => {
        console.log("cliente desconectado");
    });
};
exports.desconectado = desconectado;
//Escuchar mensajes
const mensaje = (cliente, io) => {
    cliente.on('mensaje', (payload) => {
        console.log('Mensaje recibido', payload);
        io.emit('mensaje-nuevo', payload);
    });
};
exports.mensaje = mensaje;
