abstract class Vehicle {
    private _id: number;
    protected _registrationNumber: string;
    make: string;
    model: string;
    yearOfProduction: number;
    price: number;


    constructor(id:number, registrationNumber:string, make: string, model: string, yearOfProduction: number,price: number) {
        this._id = id;
        this._registrationNumber = registrationNumber;
        this.make = make;
        this.model = model;
        this.yearOfProduction = yearOfProduction;
        this.price = price;
    }

    get id(): number {
        return this._id
    }

    abstract calculateDeprecation(): number;
    abstract displayDetails():void;
}

class Car extends Vehicle {
    numberOfDoors : number;

    constructor (id: number, registrationNumber:string, make: string, model: string, yearOfProduction: number,price: number, numberOfDoors:number){
    super (id, registrationNumber, make,model,yearOfProduction, price);
    this.numberOfDoors = numberOfDoors;
    }
    calculateDeprecation(): number {
        const currentYear = new Date().getFullYear();
        return (currentYear - this.yearOfProduction) * 0.10 * this.price;
    }

    get registrationNumber (){
        return this._registrationNumber
    }

    set registrationNumber(value: string){
        if (value.length === 4 || value.length === 6) {
                        this._registrationNumber = value;
                    } else {
                        console.log("Registration number must be either 4 or 6 characters long.");
                    }
                }

                displayDetails(): void {
                    console.log(`Car details:
                    Id:${this.id}
                    Registration number: ${this._registrationNumber}
                    Make: ${this.make}
                    Model:${this.model}
                    Year of production: ${this.yearOfProduction}
                    Price: ${this.price}
                    Number of doors: ${this.numberOfDoors}`)
                }

                drive(): void{
                    console.log("This car is taking off.")
                }
            }

    

    class Plane extends Vehicle {
    numberOfEngines: number;

    constructor(id: number, registrationNumber: string, make: string, model: string, yearOfProduction: number, price: number, numberOfEngines: number) {
        super(id, registrationNumber, make, model, yearOfProduction, price);
        this.numberOfEngines = numberOfEngines;
    }

    calculateDeprecation(): number {
        const currentYear = new Date().getFullYear();
        return (currentYear - this.yearOfProduction) * 0.15 * this.price;
    }

    displayDetails(): void {
       console.log( `Plane details:
        Id:${this.id}
        Registration number: ${this._registrationNumber}
        Make:${this.make}
        Model:${this.model},
        Year of production: ${this.yearOfProduction}
        Price: ${this.price}
        Number of Engines:${this.numberOfEngines}`);
    }

    takeOff(): void {
        console.log("The plane is taking off.");
    }
}

const car = new Car (1, "1234", "Yugo", "Skala",1985, 100000, 4);
const plane = new Plane (2,"A12P4","Boeing", "747",2001,50000000,4);

car.displayDetails();
console.log("Car depreciation:", car.calculateDeprecation().toFixed(2) )
car.drive();

plane.displayDetails();
console.log("Plane depreciation:", plane.calculateDeprecation())
plane.takeOff();














