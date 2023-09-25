// Type inference

let course = 'React - The Complete Guide';

//course = 12341; // TS will complain. Type number is not set to TS. You can restate the type but there is an inferrence implied by the initial value.

//------EXERCISE 3----------------------------------//
interface Vehicle {
    brand: string;
    speed: number;
    brake(): void;
    
    accelerate(): void;
}

const car: Vehicle = {
    brand: "Toyota",
    speed: 120,
    brake: function(): void {
        console.log(`The ${this.brand} is braking`);
    },
    accelerate(): void {
        console.log(`The ${this.brand} is accelerating`);
    }
}


car.brake();
car.accelerate();