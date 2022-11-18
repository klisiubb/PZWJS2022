"use strict";
//ZAD2_3
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//Dla 30 elementowej tablicy (z alfabetem) wyświetlić po kolei co 0,5s litery przyczym jeżeli jest to samogłoska dodać przerwę 2 sekundową.
let polishAlphabetCharCode = [
    97, 261, 98, 99, 263, 100, 101, 281, 102, 103, 104, 105, 106, 107, 108, 322,
    109, 110, 324, 111, 243, 112, 114, 115, 347, 116, 117, 119, 121, 122, 378,
    380,
];
let alphabet = [];
let vowels = ["a", "e", "i", "o", "u", "ó", "y", "ę", "ą"];
for (let i = 0; i < polishAlphabetCharCode.length; i++) {
    alphabet.push(String.fromCharCode(polishAlphabetCharCode[i]));
}
let increment = 1;
alphabet.forEach((el) => __awaiter(void 0, void 0, void 0, function* () {
    if (vowels.includes(el)) {
        let interval = 2000;
        let run = setTimeout(() => {
            console.log(`Letter: ${el} Timeout: ${interval}`);
            clearTimeout(run);
        }, interval * increment);
    }
    else {
        let interval = 500;
        let run = setTimeout(() => {
            console.log(`Letter: ${el} Timeout: ${interval}`);
            clearTimeout(run);
        }, interval * increment);
    }
    increment = increment + 1;
}));
