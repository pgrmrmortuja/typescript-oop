//Abstraction
//01
abstract class Shape {
    abstract calculateArea(): number;
}

class Circle extends Shape {
    public r: number;

    constructor(r: number) {
        super();
        this.r = r;
    };


    override calculateArea(): number {
        const area = 3.1416 * this.r * this.r;
        return area;
    }
}

const circle = new Circle(2);
console.log(circle.calculateArea()); // Output: 12.5664

//02
abstract class Employee {
    constructor(
        public name: string,
        protected _baseSalary: number,
    ) { }

    get baseSalary(): number {
        return this._baseSalary;
    }

    set baseSalary(newSalary: number) {
        if (newSalary < 0) {
            throw new Error("Salary cannot be negative value");
        }
        this._baseSalary = newSalary;
    }

    abstract calculatePay(): number;

}

class Manager extends Employee {
    calculatePay() {
        return this.baseSalary + 5000;
    }
}

class Developer extends Employee {
    calculatePay() {
        return this.baseSalary + 3000;
    }
}

const manager = new Manager("Reyad", 20000);
console.log(manager.name); // Output: Reyad
console.log(manager.calculatePay()); // Output: 25000


const developer = new Developer("Siam", 20000);
console.log(developer.calculatePay()); // Output: 23000