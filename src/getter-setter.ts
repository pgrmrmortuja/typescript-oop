// Getters and Setters: Special methods to safely read and write private data.
class User {
    constructor(
        private _username: string,
        private _password: string,
    ) {};

    // Getter: Used to read private data safely from outside
    get getUsername(): string {
        return this._username;
    }

    // Setter: Used to update private data with validation rules
    set updatePass(v: string) {
        if (v.length < 6) {
            throw new Error("Password's length must be at least 6 characters long!");
        }
        this._password = v;
        console.log("Password updated successfully.");
    }
}

const user1 = new User("reyad", "secret123");

// Testing setter with a short password (will trigger error)
try {
    user1.updatePass = "123"; 
} catch (error: any) {
    console.log(error.message); // Output: Password's length must be at least 6 characters long!
}

// Testing setter with a valid password
try {
    user1.updatePass = "newsecure123"; 
} catch (error: any) {
    console.log(error.message);
}

console.log(user1.getUsername); // Output: reyad