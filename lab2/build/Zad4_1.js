"use strict";
//ZAD4_1
Object.defineProperty(exports, "__esModule", { value: true });
//Zaprojektować listę oraz wyświetlić jej zawartość asynchronicznie (poprzezfunkcję nextTick) (na 5)
const node_process_1 = require("node:process");
let list = ["Ala", "ma", "kota", "ale", "ma", "też", "psa", "."];
list.map((e) => {
    (0, node_process_1.nextTick)(() => console.log(e));
});
console.log(`Ten komunikat jest wyżej w konsoli niż w kodzie dlatego, że zadziałał nextTick()`);
