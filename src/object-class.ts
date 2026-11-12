//Declare Car class
class Car {
    brand: string = "Toyota";
    speed: number = 100;
}

//Making car1 Object from Car class
const car1 = new Car();
console.log(car1.brand); // Output: Toyota

car1.brand = "Hp";
console.log(car1.brand); // Output: Hp