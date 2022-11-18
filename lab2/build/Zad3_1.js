"use strict";
//Zad3_1
Object.defineProperty(exports, "__esModule", { value: true });
//Napisać program, który generuje zdarzenie w przypadku otrzymania żądaniado serwera www
const http_1 = require("http");
const events_1 = require("events");
let eventEmitter = new events_1.EventEmitter();
let PORT = 8080;
let requestEventHandler = () => {
    console.log(`Event on the server....`);
};
eventEmitter.on('request', requestEventHandler);
let server = (0, http_1.createServer)((request, response) => {
    eventEmitter.emit("request");
    response.end("Welcome user from browser...");
});
server.listen(PORT);
