"use strict";
//ZAD6_1
//Zbuduj alfabet za pomocą bufora i wyświetl go w ascii i UTF
Object.defineProperty(exports, "__esModule", { value: true });
const node_buffer_1 = require("node:buffer");
let buffer = node_buffer_1.Buffer.alloc(26);
for (let i = 0; i < 26; i++) {
    buffer[i] = i + 97;
}
console.log("Converted to ASCII: ");
console.log(buffer.toString('ascii'));
console.log("Converted to UTF8: ");
console.log(buffer.toString('utf8'));
