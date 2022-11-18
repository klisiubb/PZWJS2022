//ZAD4_1

//Zaprojektować listę oraz wyświetlić jej zawartość asynchronicznie (poprzezfunkcję nextTick) (na 5)

import {nextTick} from 'node:process'
let list:string[] = ["Ala","ma","kota","ale","ma","też","psa","."]

list.map( (e)=>{
    nextTick(()=> console.log(e))
})
console.log(`Ten komunikat jest wyżej w konsoli niż w kodzie dlatego, że zadziałał nextTick()`)