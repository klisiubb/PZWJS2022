//2. Za pomocą modułu querystring przeanalizuj stronę /witaj?imie=xxxxx&nazwisko=yyyyyy i
//jako odpowiedź zwróć: witaj xxxxxx yyyyyy

import { parse } from "querystring"

const url = 'http://localhost:8000/witaj?imie=xxxxx&nazwisko=yyyyy'
const query = url.substring(url.indexOf('?') + 1)

const parsed = parse(query)
console.log(`Witaj ${parsed.imie} ${parsed.nazwisko}`)