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