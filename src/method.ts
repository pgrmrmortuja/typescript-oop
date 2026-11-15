// Class Method: A function inside a class that uses object data.
class Calculator {
    num1: number;
    num2: number;

    // Constructor: Sets initial values when a new object is made.
    constructor(num1: number, num2: number) {
        this.num1 = num1;
        this.num2 = num2;
    }

    // Method: A function that adds two numbers.
    add() {
        return this.num1 + this.num2;
    }
}

// Object Creation: Making a calc object with numbers 1 and 3.
const calc = new Calculator(1, 3);
console.log(calc.add()); // Output: 4