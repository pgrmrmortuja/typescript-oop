// Class and Object: A class is a blueprint, and an object is a real-world copy made from it.
class Car {
    // Property: A variable inside a class
    brand: string = "Toyota";
    speed: number = 100;
}

// Object Creation: Making a new object named car1 from the Car class
const car1 = new Car();
console.log(car1.brand); // Output: Toyota

// Value Updating: Changing the brand property value of the car1 object
car1.brand = "Hp"; // Note: "Hp" is usually for laptops, but it works as a string!
console.log(car1.brand); // Output: Hp