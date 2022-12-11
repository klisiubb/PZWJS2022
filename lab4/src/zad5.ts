//5. (na 5) wykonaj komunikację pomiędzy klientem a serwerem w ramach jednej aplikacji: co 1 sekunde klient wysyła zapytanie a serwer zwraca plik json.

import * as http from 'http'
import get from 'axios'

const listener = (req:any, res:any) => {
    res.writeHead(200)
    const obj = {
        text: "JSON co sekunde"
    }
    res.end(JSON.stringify(obj))
}

const server = http.createServer(listener)
server.listen(2137)

setInterval(() => {

    get('localhost":2137/')
        .then((res:any) => {
            console.log(res.data)
        })
}, 1000)