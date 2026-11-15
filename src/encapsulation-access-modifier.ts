//Encapsulation

// Encapsulation and Access Modifiers: Controlling who can see and use class data.
class WifiRouter {
    // Public: Everyone can see and change this from outside.
    public routerName: string = "TP-Link";
    
    // Private: Only this class can see this data, not outside.
    private wifiPassword: string = "secret123";

    // Public method to use private data safely inside the class
    connectDevice() {
        console.log(`Connecting ${this.routerName} with Password is ${this.wifiPassword}`);
    }
}

const myRouter = new WifiRouter();
myRouter.connectDevice(); // Output: Connecting TP-Link with Password is secret123


// 02: Secure Encapsulation using a Method
class WiFiRouter2 {
    private wifiPassword: string = "secret123";

    // Method to check password safely
    authenticate(enteredPassword: string): boolean {
        if (enteredPassword === this.wifiPassword) {
            console.log("Correct Password, Router is connecting...");
            return true;
        } else {
            console.log("Wrong Password!");
            return false;
        }
    }
}

const myRouter2 = new WiFiRouter2();
myRouter2.authenticate("wrong123"); // Output: Wrong Password!
myRouter2.authenticate("secret123"); // Output: Correct Password, Router is connecting...


// 03: Private Identifier (#) - True private data in JavaScript/TypeScript
class BankAccount {
    // # makes data completely private, hidden from outside world
    #accountPin: number = 4321; 
    private balance: number = 10000; 

    // Method to check PIN and show balance securely
    showBalance(enteredPin: number) {
        if (enteredPin === this.#accountPin) {
            console.log(`Correct Pin! Your balance: ${this.balance} BDT`);
        } else {
            console.log("Wrong Pin! Please Try Again");
        }
    }
}

const myAccount = new BankAccount();
myAccount.showBalance(1111); // Output: Wrong Pin! Please Try Again
myAccount.showBalance(4321); // Output: Correct Pin! Your balance: 10000 BDT


// 04: Protected and Inheritance - Child classes can use parent's protected data
class Person {
    constructor(protected nationalId: number) {}
}

class Employee extends Person {
    code: number;

    constructor(nationalId: number, code: number) {
        super(nationalId); // Send data to parent class
        this.code = code;
    }

    // Child class can use 'nationalId' because it is protected
    showInfo() {
        console.log(`Employee ID Card Number: ${this.nationalId}`);
    }
}

const emp = new Employee(123456789, 101);
emp.showInfo(); // Output: Employee ID Card Number: 123456789