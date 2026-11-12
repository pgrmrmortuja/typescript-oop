// Declare User Class
class User {
    name: string;
    age: number;

    // A function beside class which receive and set data to object
    constructor(name: string , age: number){
        this.name = name; // "this" can be said that the new object, which save data to the object
        this.age = age;
    }
}

const user1 = new User("Reyad" , 24);

console.log(user1.name); //Output: Reyad