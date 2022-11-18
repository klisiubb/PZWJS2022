//ZAD5
/*
5. Praca z plikami JSON:
• Stworzyć bazę danych (3 osoby) w zmiennej opartej o strukturę JSON.
(zmienna tekstowy)
• Skonwertować tekstowy na obiekt (JSON.parse),
• Wyświetlić osoby w pętli,
• Dodać osobę,
• Zamienić na ciąg znaków i wyświetlić */

import {readFileSync} from 'node:fs'

let persons = JSON.parse(readFileSync('persons.json', 'utf8'));

for (let i = 0; i < persons.persons.length; ++i) {
    console.log(` ${persons.persons[i].firstName} ${persons.persons[i].lastName} ${persons.persons[i].age}`)
}
let addedPerson = {firstName:"Leon", lastName:"Zawodowiec", age:33}

persons.persons.push(addedPerson)

let personsString: string = JSON.stringify(persons)
console.log(personsString)