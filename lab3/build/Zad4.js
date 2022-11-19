"use strict";
//Zad4
//Zdefiniuj inferfejs (warunkowy na 5) osoba i wykorzystaj go w funkcji wyświetlające dane tej osoby
const printPerson = (person) => console.log(`Person name: ${person.firstName} ${person.lastName}. Person age: ${person.age}. Is person working? ${person.isWorking}`);
let person = { firstName: "Mateusz", lastName: "Kliś", age: 22, isWorking: true };
printPerson(person);
const printConditionalPerson = (person) => {
    console.log(`Person name: ${person.firstName} ${person.lastName}. Person age: ${person.age}. Is person working? ${person.isWorking}`);
    if (person.native)
        console.log(`Is native? ${person.native}`);
    if (person.salary)
        console.log(`Salary: ${person.salary}`);
};
let conditionalPerson = { firstName: "Mateusz", lastName: "Kliś", age: 22, isWorking: true, salary: 5000 };
printConditionalPerson(conditionalPerson);
