"use strict";
//ZAD7
/*
7. Obsługa strumieni:
• Wczytaj 2 pliki synchronicznie i asynchronicznie – wyświetl wyniki na ekranie,
• Za pomocą strumieni wczytaj plik,
• W strumieniu usuń wszystkie znaki nie będące literami i spacjami,
• Dla liter zastosuj szyfr cezara,
• Zapisz wynik do drugiego pliku (strumieni) */
Object.defineProperty(exports, "__esModule", { value: true });
const node_fs_1 = require("node:fs");
(0, node_fs_1.readFile)('file1.txt', (err, data) => {
    if (err) {
        return console.log(err);
    }
    console.log(`Async File1 data: ${data.toString()}`);
});
let syncFile = (0, node_fs_1.readFileSync)('file1.txt');
console.log(`Sync File1 data : ${syncFile.toString()}`);
(0, node_fs_1.readFile)('file2.txt', (err, data) => {
    if (err) {
        return console.log(err);
    }
    console.log(`Async File2 data: ${data.toString()}`);
});
let syncFile2 = (0, node_fs_1.readFileSync)('file2.txt');
console.log(`Sync File2 data : ${syncFile2.toString()}`);
let replace = syncFile2.toString().replace(/([^a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚĆŻ\s]+)/g, '');
console.log(`Sync File2 replaced data : ${replace}`);
let array = [];
const cesar = (value) => {
    array.push(...syncFile2);
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i] + value;
    }
    let buffer = Buffer.from(array);
    (0, node_fs_1.writeFileSync)('file2.txt', buffer);
};
cesar(3);
