"use strict";
// 8. Za pomocą gniazda (moduł net) prześlij informacje pomiędzy klientem i serwerem.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const net = __importStar(require("node:net"));
const socket = net.createServer(socket => {
    console.log('SERVER START');
    socket.on('data', data => {
        const msg = `[SRV] Received: ${data.toString()}`;
        console.log(msg);
    });
    socket.pipe(socket);
});
socket.listen(2137, 'localhost');
// Socket client
const client = new net.Socket();
client.connect(2137, 'localhost', () => {
    console.log('KLIENT START');
    client.write('KLIENT DO SERWERA');
});
client.on('data', data => {
    console.log(`[KL] Received: ${data.toString()}`);
});
