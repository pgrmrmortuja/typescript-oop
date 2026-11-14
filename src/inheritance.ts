//Inheritance
//01
class Animal{
    name: string;

    constructor(name: string){
        this.name = name;
    }

    eat(){
        console.log(`${this.name} is eating.`)
    }
}

class Dog extends Animal {
    bark(){
        console.log(`${this.name} is barking.`)
    }
}

const dog = new Dog("Piku");

dog.bark(); //Output: Piku is eating.
dog.eat(); //Output: Piku is barking.

//02
// Super method
class Device {
    brand: string;

    constructor(brand: string){
        this.brand = brand;
    }

     turnOn(){
        console.log("Device is turning on...")
     }
}

class SmartPhone extends Device {
    isSmart: boolean;

    constructor(brand: string , isSmart: boolean){
        super(brand);
        this.isSmart = isSmart;
    }
}

const myPhone = new SmartPhone("Samsung", true);

console.log(myPhone.brand);   // Output: Samsung
console.log(myPhone.isSmart); // Output: true
myPhone.turnOn(); //Output: Device is turning on...