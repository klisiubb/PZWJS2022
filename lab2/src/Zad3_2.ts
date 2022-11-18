//Zad3_2

//Stworzyć własny obiekt użytkownik i zaimplementować w nim zdarzenie przyzmianie imienia, które wyświetla informacje o osobie (na 5).

import {EventEmitter} from 'events'
let eventEmitter = new EventEmitter()
let  requestEventHandler =(firstName:string, lastName:string, age:number) => {
    console.log(`My name is: ${firstName} ${lastName} and I'm ${age} years old.`)
}
eventEmitter.on('lastNameChanged', requestEventHandler)

let person = {
    firstName: "Mateusz",
    lastName: "Kliś",
    age: 22,
        set changeName(nameToChange:string){
            this.firstName = nameToChange;
            eventEmitter.emit("lastNameChanged",this.firstName,this.lastName,this.age)
            }
}

person.changeName = "Mateo"