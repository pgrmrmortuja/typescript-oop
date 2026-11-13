//01
//Constructor
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

//02
// Parameter Properties
// Shortcut
class Book{
    constructor(
        public title: string,
        private pages: number
    ){}

    getBookInfo(){
        console.log(`Title: ${this.title} and Page: ${this.pages}`)
    }
}

const book1 = new Book("ABC" , 100);
console.log(book1.getBookInfo()); //Output: Title: ABC and Page: 100