"use strict";
//Zad3_2
Object.defineProperty(exports, "__esModule", { value: true });
//Stworzyć własny obiekt użytkownik i zaimplementować w nim zdarzenie przyzmianie imienia, które wyświetla informacje o osobie (na 5).
const events_1 = require("events");
let eventEmitter = new events_1.EventEmitter();
let requestEventHandler = (firstName, lastName, age) => {
    console.log(`My name is: ${firstName} ${lastName} and I'm ${age} years old.`);
};
eventEmitter.on('lastNameChanged', requestEventHandler);
let person = {
    firstName: "Mateusz",
    lastName: "Kliś",
    age: 22,
    set changeName(nameToChange) {
        this.firstName = nameToChange;
        eventEmitter.emit("lastNameChanged", this.firstName, this.lastName, this.age);
    }
};
person.changeName = "Mateo";
