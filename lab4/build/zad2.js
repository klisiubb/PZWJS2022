"use strict";
//2. Za pomocą modułu querystring przeanalizuj stronę /witaj?imie=xxxxx&nazwisko=yyyyyy i
//jako odpowiedź zwróć: witaj xxxxxx yyyyyy
Object.defineProperty(exports, "__esModule", { value: true });
const querystring_1 = require("querystring");
const url = 'http://localhost:8000/witaj?imie=xxxxx&nazwisko=yyyyy';
const query = url.substring(url.indexOf('?') + 1);
const parsed = (0, querystring_1.parse)(query);
console.log(`Witaj ${parsed.imie} ${parsed.nazwisko}`);
