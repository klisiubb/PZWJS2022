"use strict";
//ZAD8
Object.defineProperty(exports, "__esModule", { value: true });
exports.Truck = exports.Car = void 0;
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
exports.Car = Car;
class Truck extends Car {
    constructor(make, model, year, truckThing) {
        super(make, model, year);
        this.truckThing = truckThing;
    }
}
exports.Truck = Truck;
