//ZAD2_3

//Dla 30 elementowej tablicy (z alfabetem) wyświetlić po kolei co 0,5s litery przyczym jeżeli jest to samogłoska dodać przerwę 2 sekundową.
let polishAlphabetCharCode:number[] = [
    97, 261, 98, 99, 263, 100, 101, 281, 102, 103, 104, 105, 106, 107, 108, 322,
    109, 110, 324, 111, 243, 112, 114, 115, 347, 116, 117, 119, 121, 122, 378,
    380,
]
let alphabet:string[] = []
let vowels:string[] = ["a", "e", "i", "o", "u", "ó", "y", "ę", "ą"]

for (let i = 0; i < polishAlphabetCharCode.length; i++) {
    alphabet.push(String.fromCharCode(polishAlphabetCharCode[i]))
}

let increment:number = 1

alphabet.forEach(async (el) => {
    if (vowels.includes(el)) {
        let interval:number = 2000
        let run = setTimeout(() => {
            console.log(`Letter: ${el} Timeout: ${interval}`)
            clearTimeout(run)
    }, interval * increment)
    } else {
    let interval:number = 500
    let run = setTimeout(() => {
        console.log(`Letter: ${el} Timeout: ${interval}`)
        clearTimeout(run)
      }, interval * increment)
    }
    increment = increment + 1
})