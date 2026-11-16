//Utility Types
// Partial<InterfaceName>
//01
interface UserProfile {
    id: number,
    name: string,
    email: string
}

const updateUserData = (id: number, updatedData: Partial<UserProfile>) => {
    console.log(`Updating user ${id} with:`, updatedData);
}

updateUserData(111 , {name: "Reyad"});

//Required<T>
//02
interface AppConfig {
    apiKey? : string,
    timeout? : number
}

const startServer = (config: Required<AppConfig>) => {
    console.log("Starting server with timeout:", config.timeout);
}

startServer({ apiKey: "xyz-123", timeout: 5000 });

