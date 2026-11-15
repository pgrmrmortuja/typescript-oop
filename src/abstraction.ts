// Abstraction: Hiding internal details and showing only essential features using abstract classes.
// 01: Shape Area Calculation Example
abstract class Shape {
    // Abstract method: Only the signature is here, child classes must write the full logic.
    abstract calculateArea(): number;
}

class Circle extends Shape {
    public r: number;

    constructor(r: number) {
        super();
        this.r = r;
    }

    // Implementing the abstract method with actual math logic
    override calculateArea(): number {
        const area = 3.1416 * this.r * this.r; // Fixed the multiplication logic
        return area;
    }
}

const circle = new Circle(2);
console.log(circle.calculateArea()); // Output: 12.5664


// 02: Employee Salary Calculation Example using Abstract Class and Encapsulation
abstract class Employee {
    constructor(
        public name: string,
        protected _baseSalary: number,
    ) {}

    // Getter to read base salary securely
    get baseSalary(): number {
        return this._baseSalary;
    }

    // Setter to update salary with validation
    set baseSalary(newSalary: number) {
        if (newSalary < 0) {
            throw new Error("Salary cannot be negative value");
        }
        this._baseSalary = newSalary;
    }

    // Abstract method: Every employee type must calculate their own pay differently.
    abstract calculatePay(): number;
}

class Manager extends Employee {
    override calculatePay(): number {
        return this.baseSalary + 5000; // Manager gets extra 5000 BDT
    }
}

class Developer extends Employee {
    override calculatePay(): number {
        return this.baseSalary + 3000; // Developer gets extra 3000 BDT
    }
}

const manager = new Manager("Reyad", 20000);
console.log(manager.name);          // Output: Reyad
console.log(manager.calculatePay()); // Output: 25000

const developer = new Developer("Siam", 20000);
console.log(developer.calculatePay()); // Output: 23000