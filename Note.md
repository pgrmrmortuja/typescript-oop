# 📝 TypeScript OOP & Utility Types: Quick Revision Note

---

### 1. Class & Object

- **Class:** একটি ব্লুপ্রিন্ট বা নকশা (যেমন: কারের ডিজাইন)।
- **Object:** সেই নকশা দিয়ে তৈরি আসল জিনিস (যেমন: একটি নির্দিষ্ট গাড়ি)।

**TypeScript**

```typescript
class Car {
    brand: string = "Toyota"; // Property
}

const car1 = new Car(); // Object creation
console.log(car1.brand); // Output: Toyota
```

---

### 2. Constructor & Parameter Properties

- **Constructor:** অবজেক্ট তৈরির সাথে সাথে ডাটা সেট করার একটি বিশেষ ফাংশন।
- **Parameter Properties (Shortcut):** কনস্ট্রাক্টরের ভেতরেই সরাসরি `public` বা `private` লিখে প্রপার্টি ডিক্লেয়ার করার শর্টকাট।

**TypeScript**

```typescript
class User {
    // Shortcut: constructor-এর ভেতরেই প্রপার্টি বানিয়ে ফেলা
    constructor(public name: string, private age: number) {}
}

const user1 = new User("Reyad", 24);
console.log(user1.name); // Output: Reyad
```

---

### 3. Class Methods

- **Method:** ক্লাসের ভেতরে থাকা কোনো ফাংশন, যা অবজেক্টের ডাটা নিয়ে কাজ করে।

**TypeScript**

```typescript
class Calculator {
    add(a: number, b: number): number {
        return a + b; // Method
    }
}

const calc = new Calculator();
console.log(calc.add(2, 3)); // Output: 5
```

---

### 4. Access Modifiers (Encapsulation)

কে কোন ডাটা দেখতে বা ব্যবহার করতে পারবে তা নিয়ন্ত্রণ করা:

- `public`: বাইরে থেকে সবাই দেখতে ও বদলাতে পারবে (ডিফল্ট)।
- `private`: শুধু ক্লাসের **ভিতরে** ব্যবহার করা যাবে, বাইরে থেকে দেখা যাবে না।
- `protected`: ক্লাসের নিজের ভেতর এবং **চাইল্ড ক্লাসে** ব্যবহার করা যাবে।
- `# (Private Identifier):` জাভাস্ক্রিপ্টের নিজস্ব রিয়েল প্রাইভেট সিস্টেম।

**TypeScript**

```typescript
class BankAccount {
    private balance: number = 5000; // Only inside class
    #pin: number = 1234;            // True private (JS feature)
}
```

---

### 5. Getters & Setters

- `get`: প্রাইভেট ডাটা বাইরে থেকে নিরাপদে পড়ার জন্য।
- `set`: প্রাইভেট ডাটা ভ্যালিডেশন (শর্ত) দিয়ে আপডেট করার জন্য।

**TypeScript**

```typescript
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

---

### 6. Inheritance & `super()`

- **Inheritance (`extends`):** বাবা ক্লাসের প্রপার্টি ও মেথড চাইল্ড ক্লাস উত্তরাধিকার সূত্রে পেয়ে যাওয়া।
- **`super()`:** চাইল্ড ক্লাস থেকে প্যারেন্ট (বাবা) ক্লাসে ডাটা বা কনস্ট্রাক্টরে পাঠানোর মাধ্যম।

**TypeScript**

```typescript
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

---

### 7. Polymorphism & Method Overriding

- **Polymorphism:** একই নামের মেথড ভিন্ন ভিন্ন ক্লাসে ভিন্নভাবে কাজ করা।
- **Override:** বাবা ক্লাসের মেথডকে চাইল্ড ক্লাসে নিজের মতো করে বদলে নেওয়া।

**TypeScript**

```typescript
class AnimalSound {
    makeSound() { console.log("Some sound..."); }
}

class Cat extends AnimalSound {
    override makeSound() { console.log("Meow Meow!"); } // Overriding
}
```

---

### 8. Abstraction

- **Abstract Class:** যে ক্লাস থেকে সরাসরি অবজেক্ট বানানো যায় না, এটি শুধু অন্য ক্লাসের জন্য নকশা বা রুলস তৈরি করে দেয়।

**TypeScript**

```typescript
abstract class Vehicle {
    abstract startEngine(): void; // Body নেই, চাইল্ডকে বানাতেই হবে
}

class Bike extends Vehicle {
    override startEngine() {
        console.log("Bike engine started.");
    }
}
```

---

### 9. Utility Types

TypeScript-এর কিছু বিল্ট-ইন টুল যা দিয়ে আগের টাইপগুলোকে বদলে নতুন টাইপ বানানো যায়:

1. `Partial<T>`: সব প্রপার্টিকে অপশনাল (`?`) করে দেয়।
2. `Required<T>`: সব অপশনাল প্রপার্টিকে জরুরি বা বাধ্যতামূলক করে দেয়।
3. `Pick<T, K>`: একটা ইন্টারফেস থেকে শুধু পছন্দের প্রপার্টিগুলো বেছে নেয়।
4. `Omit<T, K>`: একটা ইন্টারফেস থেকে নির্দিষ্ট প্রপার্টি বাদ (বাদ দিয়ে বাকিগুলো) দেয়।
5. `Record<K, T>`: অবজেক্টের চাবি (Key) এবং মানের (Value) টাইপ একসাথে ঠিক করে দেয়।

**TypeScript**

```typescript
interface User {
    id: number;
    name: string;
    email?: string;
}

type OptionalUser = Partial<User>; // All optional
type PickedUser = Pick<User, "id" | "name">; // Only id and name
type CleanUser = Omit<User, "email">; // Without email
```