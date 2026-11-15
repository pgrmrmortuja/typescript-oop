// Polymorphism
// Inheritance + Override = Polymorphism
// Poly (Many) + Morph (Forms) = Polymorphism
//01
class PaymentProcessor {

    processPayment(amount: number){
        console.log(`Processing payment of ${amount} BDT...`)
    }
}

class BkashPayment extends PaymentProcessor {

    override processPayment(amount: number){
        console.log(`Processing ${amount} BDT via bKash Gateway...`);
    }
}

class CardPayment extends PaymentProcessor {
  override processPayment(amount: number): void {
    console.log(`Processing ${amount} BDT via Credit/Debit Card...`);
  }
}

//Polymorphic Function
function makePayment(processor: PaymentProcessor , amount: number){
    processor.processPayment(amount);
}

const bKash = new BkashPayment();
const card = new CardPayment();

makePayment(bKash, 1500); // Output: Processing 1500 BDT via bKash Gateway...
makePayment(card, 5000);  // Output: Processing 5000 BDT via Credit/Debit Card...

//02
class Employee {

    calculateBonus(amount: number){
        console.log(`Your Bonus is ${amount + 500} BDT`);
    }
};

class Manager extends Employee {

    override calculateBonus(amount: number){
        console.log(`Manager Bonus is ${amount + 1300} BDT`);
    }
};

class Developer extends Employee {

    override calculateBonus(amount: number){
        console.log(`Developer Bonus is ${amount + 1200} BDT`);
    }
};

//Polymorphic Function
function printBonus(e: Employee , amount: number){
    e.calculateBonus(amount);
};

const manager = new Manager();
const developer = new Developer();

//instanceof
console.log(manager instanceof Manager); // true 
console.log(developer instanceof Manager); // false

printBonus(manager , 30000);
printBonus(developer, 20000);