// 8. Za pomocą gniazda (moduł net) prześlij informacje pomiędzy klientem i serwerem.

import * as net from 'node:net'

const socket = net.createServer(socket => {
    console.log('SERVER START')
    socket.on('data', data => {
        const msg = `[SRV] Received: ${data.toString()}`
        console.log(msg)
    })

	socket.pipe(socket)
})

socket.listen(2137, 'localhost')

// Socket client
const client = new net.Socket()
client.connect(2137, 'localhost', () => {
	console.log('KLIENT START')
	client.write('KLIENT DO SERWERA')
});

client.on('data', data => {
    console.log(`[KL] Received: ${data.toString()}`)
})