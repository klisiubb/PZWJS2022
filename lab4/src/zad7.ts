//7. Zaimplementuj serwer w uwierzytelnianiem HTTPS z funkcjonalnością z 2 stronami /stara /nowa

import * as https from 'node:https'
import * as fs from 'fs'


const options = {
    key: fs.readFileSync(`./key.key`),
    cert: fs.readFileSync(`./cert.crt`)
  }
  
const listener = (req:any, res:any) => {
    res.writeHead(200)
    if(req.url == '/nowa') {
        res.end('Nowa')
    } else if(req.url == '/stara') {
        res.end('Stara')
    } else {
        res.send("OK")
    }
}

const server = https.createServer(options, listener);
server.listen(2137)