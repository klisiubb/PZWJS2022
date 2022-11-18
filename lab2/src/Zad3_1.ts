//Zad3_1

//Napisać program, który generuje zdarzenie w przypadku otrzymania żądaniado serwera www

import {createServer} from 'http'
import {EventEmitter} from 'events'
let eventEmitter = new EventEmitter()
let PORT:number = 8080

let requestEventHandler = () => {
    console.log(`Event on the server....`)
}

eventEmitter.on('request', requestEventHandler)

let server = createServer((request:any, response:any) =>{
    eventEmitter.emit("request")
    response.end("Welcome user from browser...")
})

server.listen(PORT)
