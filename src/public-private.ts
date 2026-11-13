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

myRouter.connectDevice(); //Connecting TP-Link with Password is secret123

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
myRouter2.authenticate("wrong123"); // Wrong Password!
myRouter2.authenticate("secret123"); // Correct Password, Router is connecting...