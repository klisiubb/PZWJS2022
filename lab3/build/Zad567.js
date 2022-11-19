"use strict";
//Zad5
//Zdefiniuj klasę car, oraz 3 obiekty będące jej instancjami,
//Zad6
//Dodaj do klasy konstruktor oraz funkcję wyświetlającą opis obiektu,
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    print() {
        return console.log(`Make: ${this.make}. Model: ${this.model}. Year: ${this.year}.`);
    }
}
let car1 = new Car("Nissan", "200SX", 2001);
let car2 = new Car("Mazda", "RX-7 FD", 1998);
let car3 = new Car("Nissan", "Skyline R34", 2000);
car1.print();
car2.print();
car3.print();
//ZAD7
//Zdefiniuj klasę truck dziedzicząca z klasy car. Skorzystaj z operatora super,
class Truck extends Car {
    constructor(make, model, year, truckThing) {
        super(make, model, year);
        this.truckThing = truckThing;
    }
}
let truck = new Truck("MAN", "Jakiś model", 2022, "coś");
truck.print();
