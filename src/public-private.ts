//Encapsulation
//Access Modifiers (Public , Private, Protected)
// Public , Private

//01
//! Bad Practice
class WifiRouter {
    public routerName: string = "TP-Link";
    private wifiPassword: string = "secret123"; // Not access outside class

    connectDevice(){
        console.log(`Connecting ${this.routerName} with Password is ${this.wifiPassword}`)
    }
}

const myRouter = new WifiRouter();

//! private property can be seen by method connectDevice()
myRouter.connectDevice(); //Output: Connecting TP-Link with Password is secret123

//! myRouter.wifiPassword = "hacked123"; // wifiPassword is Private

//02
class WiFiRouter2 {
 
  private wifiPassword: string = "secret123";

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

// 
// console.log(myRouter2.wifiPassword); //! Error!

// 
myRouter2.authenticate("wrong123"); //Output: Wrong Password!
myRouter2.authenticate("secret123"); //Output: Correct Password, Router is connecting...


//03
//Private Identifier (#)
//ECMAScript Private Class Features
class BankAccount {
  // No one with this earth see that data, because used #
  #accountPin: number = 4321; 
  private balance: number = 10000; 

  showBalance(enteredPin: number) {
    if (enteredPin === this.#accountPin) {
      console.log(`Correct Pin! Your balance: ${this.balance} BDT`);
    } else {
      console.log("Wrong Pin! Please Try Again");
    }
  }
}

const myAccount = new BankAccount();


//! console.log(myAccount.#accountPin); App will crash
//! console.log(myAccount.balance); App will crash


myAccount.showBalance(1111); //Output: Wrong Pin! Please Try Again
myAccount.showBalance(4321); //Output: Correct Pin! Your balance: 10000 BDT