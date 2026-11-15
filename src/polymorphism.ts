// Polymorphism: One method or function can work in many different forms.
// 01: Payment Gateway Example
class PaymentProcessor {
    processPayment(amount: number) {
        console.log(`Processing payment of ${amount} BDT...`);
    }
}

class BkashPayment extends PaymentProcessor {
    override processPayment(amount: number) {
        console.log(`Processing ${amount} BDT via bKash Gateway...`);
    }
}

class CardPayment extends PaymentProcessor {
    override processPayment(amount: number): void {
        console.log(`Processing ${amount} BDT via Credit/Debit Card...`);
    }
}

// Polymorphic Function: Works with any payment object and calls its specific method
function makePayment(processor: PaymentProcessor, amount: number) {
    processor.processPayment(amount);
}

const bKash = new BkashPayment();
const card = new CardPayment();

makePayment(bKash, 1500); // Output: Processing 1500 BDT via bKash Gateway...
makePayment(card, 5000);  // Output: Processing 5000 BDT via Credit/Debit Card...


// 02: Employee Bonus Example and checking object type using instanceof
class Employee {
    calculateBonus(amount: number) {
        console.log(`Your Bonus is ${amount + 500} BDT`);
    }
}

class Manager extends Employee {
    override calculateBonus(amount: number) {
        console.log(`Manager Bonus is ${amount + 1300} BDT`);
    }
}

class Developer extends Employee {
    override calculateBonus(amount: number) {
        console.log(`Developer Bonus is ${amount + 1200} BDT`);
    }
}

// Polymorphic Function: Works with any employee object to calculate bonus
function printBonus(e: Employee, amount: number) {
    e.calculateBonus(amount);
}

const manager = new Manager();
const developer = new Developer();

// Check if an object belongs to a specific class using instanceof
console.log(manager instanceof Manager);   // Output: true 
console.log(developer instanceof Manager); // Output: false

printBonus(manager, 30000);   // Output: Manager Bonus is 31300 BDT
printBonus(developer, 20000); // Output: Developer Bonus is 21200 BDT