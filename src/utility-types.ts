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

updateUserData(111, { name: "Reyad" });

//Required<T>
//02
interface AppConfig {
    apiKey?: string,
    timeout?: number
}

const startServer = (config: Required<AppConfig>) => {
    console.log("Starting server with timeout:", config.timeout);
}

startServer({ apiKey: "xyz-123", timeout: 5000 });

//Pick<K, T>
//03
interface Product {
    id: number,
    name: string,
    price: number,
    description: string,
    stock: number
}

type ProductCardInfo = Pick<Product, "name" | "price">;

const item: ProductCardInfo = {
    name: "Laptop",
    price: 1000000
}

//Omit<K, T>
//04
interface BankAccount {
    accountNumber: string;
    holderName: string;
    balance: number;
    pinCode: string; // must be hidden
}

type PublicAccountInfo = Omit<BankAccount, "pinCode">;

const myAccount: PublicAccountInfo = {
    accountNumber: "BD123456",
    holderName: "Rahim Uddin",
    balance: 50000,
}