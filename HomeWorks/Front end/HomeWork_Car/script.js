class Car {
    constructor(model,production, price, minSpeed, maxSpeed){
        this.model = model;
        this.production = production;
        this.price = price;
        this.minSpeed = minSpeed;
        this.maxSpeed = maxSpeed;
    }

    acclereate() {
        return this.minSpeed + 10;
    }

    brake() {
        return this.maxSpeed - 20;
    }

    display() {
        return `This is ${this.model}. This car is made in ${this.production}. It costs ${this.price}. 
                It has min Speed ${this.minSpeed} and max Speed ${this.maxSpeed}`
    }

}

class Toyota extends Car {
    constructor(model, production,price, minSpeed, maxSpeed) {
      super(model, production,price, minSpeed, maxSpeed)
    }
}

let car1 = new Car("BMW","Germany",50000,20,200);
console.log(car1.display());
console.log(car1.acclereate());
console.log(car1.brake());

let car2 =new Toyota("Toyota","Japan",30000,20,220);
console.log(car2.display());
console.log(car2.acclereate());
console.log(car2.brake());