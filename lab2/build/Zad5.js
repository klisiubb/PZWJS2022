"use strict";
//ZAD5
/*
5. Praca z plikami JSON:
• Stworzyć bazę danych (3 osoby) w zmiennej opartej o strukturę JSON.
(zmienna tekstowy)
• Skonwertować tekstowy na obiekt (JSON.parse),
• Wyświetlić osoby w pętli,
• Dodać osobę,
• Zamienić na ciąg znaków i wyświetlić */
Object.defineProperty(exports, "__esModule", { value: true });
const node_fs_1 = require("node:fs");
let persons = JSON.parse((0, node_fs_1.readFileSync)('persons.json', 'utf8'));
for (let i = 0; i < persons.persons.length; ++i) {
    console.log(` ${persons.persons[i].firstName} ${persons.persons[i].lastName} ${persons.persons[i].age}`);
}
let addedPerson = { firstName: "Leon", lastName: "Zawodowiec", age: 33 };
persons.persons.push(addedPerson);
let personsString = JSON.stringify(persons);
console.log(personsString);
