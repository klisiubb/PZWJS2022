"use strict";
//6. (na 5) pobierz dane o pogodzie i wyświetl we własnej aplikacji
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
(0, axios_1.default)('https://danepubliczne.imgw.pl/api/data/synop/station/bielskobiala')
    .then((res) => {
    const data = res.data;
    console.log(`Nazwa stacji: ${res.data.stacja}`);
    console.log(`Data pomiaru: ${res.data.data_pomiaru}`);
    console.log(`Temperatura: ${res.data.temperatura}`);
    console.log(`Cisnienie: ${res.data.cisnienie}`);
})
    .catch(err => console.log('Blad'));
