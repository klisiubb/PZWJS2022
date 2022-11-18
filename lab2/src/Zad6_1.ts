//ZAD6_1
//Zbuduj alfabet za pomocą bufora i wyświetl go w ascii i UTF

import { Buffer } from 'node:buffer'

let buffer = Buffer.alloc(26);

for (let i = 0 ; i < 26 ; i++) {buffer[i] = i + 97;}

console.log("Converted to ASCII: ")
console.log( buffer.toString('ascii'))

console.log("Converted to UTF8: ")
console.log( buffer.toString('utf8'))
