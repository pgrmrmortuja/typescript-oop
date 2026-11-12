class Calculator {
    num1: number;
    num2: number;

    constructor(num1: number , num2: number){
        this.num1 = num1;
        this.num2 = num2;
    }

    //add is a method
    //method is a function under class
    // it performs with object data
    add(){
        return this.num1 + this.num2;
    }
}

const calc = new Calculator(1,3);
console.log(calc.add()); // Output: 4