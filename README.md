# TypeScript OOP & Utility Types

A collection of TypeScript practice files covering Object-Oriented Programming (OOP) concepts and built-in Utility Types.

This repository is part of my TypeScript learning journey, where I practice fundamental OOP concepts, understand their implementations, and build a strong programming foundation.

## 📚 Topics Covered

1. Class & Object
2. Constructor & Parameter Properties
3. Class Methods
4. Access Modifiers & Encapsulation
5. Getters & Setters
6. Inheritance & `super()`
7. Polymorphism & Method Overriding
8. Abstraction
9. Utility Types

## 📁 Project Structure

```text
typescript-oop/
│
├── dist/
│
├── src/
│   ├── abstraction.ts
│   ├── constructor.ts
│   ├── encapsulation-access-modifier.ts
│   ├── getter-setter.ts
│   ├── inheritance.ts
│   ├── method.ts
│   ├── object-class.ts
│   ├── polymorphism.ts
│   ├── script.ts
│   └── utility-types.ts
│
├── .gitignore
├── index.html
├── Note.md
├── README.md
└── tsconfig.json
```

---

## 📝 TypeScript OOP & Utility Types: Quick Revision Note

### 1. Class & Object

- **Class:** A blueprint or design (like a car design).
- **Object:** The real thing made from that design (like a specific car).

TypeScript
```
class Car {
    brand: string = "Toyota"; // Property
}

const car1 = new Car(); // Object creation
console.log(car1.brand); // Output: Toyota

```

### 2. Constructor & Parameter Properties

- **Constructor:** A special function that sets data when making an object.
- **Parameter Properties (Shortcut):** A shortcut to make properties directly inside the constructor using `public` or `private`.

TypeScript
```
class User {
    // Shortcut: making property inside constructor
    constructor(public name: string, private age: number) {}
}

const user1 = new User("Reyad", 24);
console.log(user1.name); // Output: Reyad

```

### 3. Class Methods

- **Method:** A function inside a class that works with object data.

TypeScript
```
class Calculator {
    add(a: number, b: number): number {
        return a + b; // Method
    }
}

const calc = new Calculator();
console.log(calc.add(2, 3)); // Output: 5

```

### 4. Access Modifiers (Encapsulation)

Controlling who can see or use which data:

- `public`: Everyone from outside can see and change it (default).
- `private`: Can only be used inside the class, cannot be seen from outside.
- `protected`: Can be used inside the class itself and in child classes.
- `# (Private Identifier)`: JavaScript's own real private system.

TypeScript
```
class BankAccount {
    private balance: number = 5000; // Only inside class
    #pin: number = 1234;            // True private (JS feature)
}

```

### 5. Getters & Setters

- `get`: To read private data safely from outside.
- `set`: To update private data with validation (a condition).

TypeScript
```
class Person {
    constructor(private _name: string) {}

    get getName() {
        return this._name; // Read private data
    }

    set setName(newName: string) {
        if (newName.length > 2) {
            this._name = newName; // Update with condition
        }
    }
}

```

### 6. Inheritance & `super()`

- **Inheritance (`extends`):** The child class gets parent class properties and methods as a gift.
- **`super()`:** A way to send data or call the constructor from a child class to a parent class.

TypeScript
```
class Animal {
    constructor(public name: string) {}
}

class Dog extends Animal {
    constructor(name: string) {
        super(name); // Sending data to parent class
    }
    bark() { console.log("Woof!"); }
}

```

### 7. Polymorphism & Method Overriding

- **Polymorphism:** The same method name works in different ways in different classes.
- **Override:** Changing the parent class method in the child class in a personal way.

TypeScript
```
class AnimalSound {
    makeSound() { console.log("Some sound..."); }
}

class Cat extends AnimalSound {
    override makeSound() { console.log("Meow Meow!"); } // Overriding
}

```

### 8. Abstraction

- **Abstract Class:** A class from which an object cannot be made directly; it only makes designs or rules for other classes.

TypeScript
```
abstract class Vehicle {
    abstract startEngine(): void; // No body, child must make it
}

class Bike extends Vehicle {
    override startEngine() {
        console.log("Bike engine started.");
    }
}

```

### 9. Utility Types

Some built-in tools of TypeScript used to change old types and make new types:

1. `Partial<T>`: Makes all properties optional (`?`).
2. `Required<T>`: Makes all optional properties mandatory.
3. `Pick<T, K>`: Picks only preferred properties from an interface.
4. `Omit<T, K>`: Removes specific properties from an interface.
5. `Record<K, T>`: Sets the key and value types of an object together.

TypeScript
```
interface User {
    id: number;
    name: string;
    email?: string;
}

type OptionalUser = Partial<User>; // All optional
type PickedUser = Pick<User, "id" | "name">; // Only id and name
type CleanUser = Omit<User, "email">; // Without email
```

---

## ⚙️ Technologies Used

- TypeScript
- JavaScript

## 🚀 How to Run

Install TypeScript:

```bash
npm install -g typescript
```

Check TypeScript version:

```bash
tsc --version
```

Compile a TypeScript file:

```bash
tsc object-class.ts
```

Run the compiled JavaScript file:

```bash
node object-class.js
```

## 🎯 Learning Goals

- Understand Object-Oriented Programming in TypeScript.
- Practice the four pillars of OOP.
- Learn TypeScript Utility Types.
- Improve coding skills through hands-on practice.
- Build a strong foundation for advanced TypeScript development.

---

**Repository Status:** Learning & Practicing

**Primary Language:** TypeScript