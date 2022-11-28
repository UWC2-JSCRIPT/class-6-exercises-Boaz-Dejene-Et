$( document ).ready(function() {
    /**
     * Car class
     * @constructor
     * @param {String} model
     */

    //  Create an instance, accelerate twice, brake once, and console log the instance.toString()

    class Car {
        constructor(model) {
            this.model = model;
            this.accelerate = "twice"
            this.brake = "once"
        }
        accelerate() {
            console.log("instance.toString()")
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
            this.model = model;
            this.accelerate = "twice"
            this.brake = "once"
        }
        accelerate() {
            // instance.toString()
        }
    }

    let electricCar = new ElectricCar("S-28")
    console.log(electricCar.toString())
})