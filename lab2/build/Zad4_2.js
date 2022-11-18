"use strict";
//ZAD4_2
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//Wyświetlić zawartości tablicy przy zastosowaniu rekurencji (także asynchronicznie na 5).
let array = new Array("Ala", "ma", "kota", "i", "ten", "kot", "jest", "rudy", ".");
const recursivePrint = (array) => {
    if (array.length > 0) {
        console.log(array.shift());
        recursivePrint(array);
    }
};
const recursivePrintAsync = (array) => __awaiter(void 0, void 0, void 0, function* () {
    if (array.length > 0) {
        yield console.log(array.shift());
        yield recursivePrint(array);
    }
});
recursivePrint(array);
recursivePrintAsync(array);
