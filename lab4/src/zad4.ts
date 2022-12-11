//4. Zaimplementuj serwer http obsługujący 2 strony /nowa i /stara z różnymi treściami (użyj funkcji write oraz end)


import * as http from 'http'


const listener = (req:any, res:any) => {
    res.writeHead(200)
    if(req.url == '/nowa') {
        res.end('Nowa')
    } else if(req.url == '/stara') {
        res.end('Stara')
    } else {
        res.send('OK')
    }
}

const server = http.createServer(listener)
server.listen(2137)