class Car {
    name;
    speed;
    seats;
    brand;
    constructor(name, speed, seats, brand) {
        this.name = name;
        this.speed = speed;
        this.seats = seats;
        this.brand = brand;
    }
    honk() {
        console.log(this.brand + " sound")
    }
    start() {}
    stop() {}
}

class SuperCar extends Car {
    topSpeed;
    static getLimitedSpeed() {
        return 300;
    }
    constructor(name, speed, seats, brand, topSpeed) {
        super(name, speed, seats, brand)
        this.topSpeed = topSpeed;
    }
    turboBoost() {
        console.log(this.name + " is boosting to " + this.topSpeed)
    }

    honk() {
        super.honk(); //truy cap vao honk cua parents
        console.log("New " + this.brand + " speed") //new honk cua con
    }
}

const myCar = new Car("Fadil", 100, null, "VinFast");
const aliceCar = new Car("Vios", 120, 5, "Toyota");

myCar.honk();
aliceCar.honk();
console.log(SuperCar.getLimitedSpeed) // chua can khoi tao bobCar nhung da co the in ra --> static
const bobCar = new SuperCar("Ferrari Spider", 150, 2, "Ferrari", 250)
bobCar.honk()
bobCar.turboBoost()