// Constructor: A special function that sets up data when an object is created.
class User {
    name: string;
    age: number;

    // Constructor sets initial values for the object
    constructor(name: string, age: number) {
        this.name = name; // "this" means the current new object
        this.age = age;
    }
}

const user1 = new User("Reyad", 24);
console.log(user1.name); // Output: Reyad

// Parameter Properties: A shortcut to make and set properties directly in constructor.
class Book {
    constructor(
        public title: string,
        private pages: number
    ) {}

    getBookInfo() {
        console.log(`Title: ${this.title} and Page: ${this.pages}`);
    }
}

const book1 = new Book("ABC", 100);
book1.getBookInfo(); // Output: Title: ABC and Page: 100