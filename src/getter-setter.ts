class User {
    constructor(
        private _username: string,
        private _password: string,
    ){};

    
    get getUsername() : string {
        return this._username;
    }

    
    set updatePass(v : string) {
        if (v.length < 6) {
            throw new Error("Password's length must be at least 6 characters long!");
        }
        this._password = v;
        console.log("Password updated successfully.");
    }
    
}

const user1 = new User("reyad" , "secret123");

user1.updatePass = "123"; //Output: Password's length must be 6 character long

console.log(user1.getUsername); //Output: reyad