//ZAD8

export class Car {
    public make: string;
    public model: string;
    public year: number;
    constructor(make:string,model:string,year:number){
        this.make =make;
        this.model = model;
        this.year = year;
    }
    public print(){
        return  console.log(`Make: ${this.make}. Model: ${this.model}. Year: ${this.year}.`)
    }
}
export class Truck extends Car {
    public truckThing: string;
    
    constructor(make:string,model:string,year:number,truckThing:string){
        super(make,model,year)
        this.truckThing = truckThing;
    }  
}
