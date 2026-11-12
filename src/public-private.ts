//Encapsulation
//Access Modifiers (Public , Private, Protected)
// Public , Private
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