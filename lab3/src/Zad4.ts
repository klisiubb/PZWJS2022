//Zad4
//Zdefiniuj inferfejs (warunkowy na 5) osoba i wykorzystaj go w funkcji wyświetlające dane tej osoby

interface Person {
    firstName: string;
    lastName: string;
    age: number;
    isWorking: boolean;
}

const printPerson = (person:Person) => console.log(`Person name: ${person.firstName} ${person.lastName}. Person age: ${person.age}. Is person working? ${person.isWorking}`)
 

let person:Person = {firstName: "Mateusz",lastName:"Kliś",age:22,isWorking:true}

printPerson(person)

//Na 5
interface ConditionalPerson {
    firstName: string;
    lastName: string;
    age: number;
    isWorking: boolean;
    native?: string;
    salary?: number
}

const printConditionalPerson = (person:ConditionalPerson) => {
     console.log(`Person name: ${person.firstName} ${person.lastName}. Person age: ${person.age}. Is person working? ${person.isWorking}`)
        if(person.native) console.log(`Is native? ${person.native}`)
        if(person.salary) console.log(`Salary: ${person.salary}`)
}

let conditionalPerson:ConditionalPerson = {firstName: "Mateusz",lastName:"Kliś",age:22,isWorking:true,salary:5000}
printConditionalPerson(conditionalPerson)