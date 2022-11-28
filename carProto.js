$( document ).ready(function() {
    /**
     * Car class
     * @constructor
     * @param {String} model
     */

    //  Create an instance, accelerate twice, brake once, and console log the instance.toString()

    class Car {
        constructor(model) {
            this.speed = 0;
            this.model = model;
        }
        
        accelerate() {
            this.speed++;
        }
        brake(){
            this.speed--;
        }
        toString(){
            return (`model:${this.model}, speed:${this.speed}`);
        }
    }

    let car = new Car("221");
    console.log(car.toString())

    /**
     * ElectricCar class
     * @constructor
     * @param {String} model
     */

    //  Create an instance, accelerate twice, brake once, and console log the instance.toString()
    class ElectricCar {
        constructor(model) {
            this.speed = 0;
            this.model = model;
        }
        
        accelerate() {
            this.speed++;
        }
        brake(){
            this.speed--;
        }
        toString(){
            return (`model:${this.model}, speed:${this.speed}`);
        }
    }

    let electricCar = new ElectricCar("S-28")

    console.log(electricCar.toString())
})