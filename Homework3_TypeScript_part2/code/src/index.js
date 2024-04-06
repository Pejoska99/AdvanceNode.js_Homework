var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(id, registrationNumber, make, model, yearOfProduction, price) {
        this._id = id;
        this._registrationNumber = registrationNumber;
        this.make = make;
        this.model = model;
        this.yearOfProduction = yearOfProduction;
        this.price = price;
    }
    Object.defineProperty(Vehicle.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(id, registrationNumber, make, model, yearOfProduction, price, numberOfDoors) {
        var _this = _super.call(this, id, registrationNumber, make, model, yearOfProduction, price) || this;
        _this.numberOfDoors = numberOfDoors;
        return _this;
    }
    Car.prototype.calculateDeprecation = function () {
        var currentYear = new Date().getFullYear();
        return (currentYear - this.yearOfProduction) * 0.10 * this.price;
    };
    Object.defineProperty(Car.prototype, "registrationNumber", {
        get: function () {
            return this._registrationNumber;
        },
        set: function (value) {
            if (value.length === 4 || value.length === 6) {
                this._registrationNumber = value;
            }
            else {
                console.log("Registration number must be either 4 or 6 characters long.");
            }
        },
        enumerable: false,
        configurable: true
    });
    Car.prototype.displayDetails = function () {
        console.log("Car details:\n                    Id:".concat(this.id, "\n                    Registration number: ").concat(this._registrationNumber, "\n                    Make: ").concat(this.make, "\n                    Model:").concat(this.model, "\n                    Year of production: ").concat(this.yearOfProduction, "\n                    Price: ").concat(this.price, "\n                    Number of doors: ").concat(this.numberOfDoors));
    };
    Car.prototype.drive = function () {
        console.log("This car is taking off.");
    };
    return Car;
}(Vehicle));
var Plane = /** @class */ (function (_super) {
    __extends(Plane, _super);
    function Plane(id, registrationNumber, make, model, yearOfProduction, price, numberOfEngines) {
        var _this = _super.call(this, id, registrationNumber, make, model, yearOfProduction, price) || this;
        _this.numberOfEngines = numberOfEngines;
        return _this;
    }
    Plane.prototype.calculateDeprecation = function () {
        var currentYear = new Date().getFullYear();
        return (currentYear - this.yearOfProduction) * 0.15 * this.price;
    };
    Plane.prototype.displayDetails = function () {
        console.log("Plane details:\n        Id:".concat(this.id, "\n        Registration number: ").concat(this._registrationNumber, "\n        Make:").concat(this.make, "\n        Model:").concat(this.model, ",\n        Year of production: ").concat(this.yearOfProduction, "\n        Price: ").concat(this.price, "\n        Number of Engines:").concat(this.numberOfEngines));
    };
    Plane.prototype.takeOff = function () {
        console.log("The plane is taking off.");
    };
    return Plane;
}(Vehicle));
var car = new Car(1, "1234", "Yugo", "Skala", 1985, 100000, 4);
var plane = new Plane(2, "A12P4", "Boeing", "747", 2001, 50000000, 4);
car.displayDetails();
console.log("Car depreciation:", car.calculateDeprecation().toFixed(2));
car.drive();
plane.displayDetails();
console.log("Plane depreciation:", plane.calculateDeprecation());
plane.takeOff();
