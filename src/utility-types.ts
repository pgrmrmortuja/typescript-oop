// Utility Types: Built-in tools in TypeScript to transform and change existing types easily.

// 01: Partial<T> - Makes all properties optional (?) so you can update only some values.
interface UserProfile {
    id: number;
    name: string;
    email: string;
}

const updateUserData = (id: number, updatedData: Partial<UserProfile>) => {
    console.log(`Updating user ${id} with:`, updatedData);
};

updateUserData(111, { name: "Reyad" }); // Output: Updating user 111 with: { name: 'Reyad' }


// 02: Required<T> - Makes all optional properties mandatory (required).
interface AppConfig {
    apiKey?: string;
    timeout?: number;
}

const startServer = (config: Required<AppConfig>) => {
    console.log("Starting server with timeout:", config.timeout);
};

startServer({ apiKey: "xyz-123", timeout: 5000 }); // Output: Starting server with timeout: 5000


// 03: Pick<T, K> - Selects only the specific properties you need from an interface.
interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    stock: number;
}

// Pick only name and price for product card view
type ProductCardInfo = Pick<Product, "name" | "price">;

const item: ProductCardInfo = {
    name: "Laptop",
    price: 1000000,
};


// 04: Omit<T, K> - Removes specific properties that you don't want.
interface BankAccount {
    accountNumber: string;
    holderName: string;
    balance: number;
    pinCode: string; // Must be hidden for security
}

// Omit (hide) pinCode for public account info
type PublicAccountInfo = Omit<BankAccount, "pinCode">;

const myAccount: PublicAccountInfo = {
    accountNumber: "BD123456",
    holderName: "Rahim Uddin",
    balance: 50000,
};


// 05: Record<Keys, Type> - Creates an object type with specific keys and value types.
type AppEnvironment = "dev" | "staging" | "prod";

const serverUrls: Record<AppEnvironment, string> = {
    dev: "http://localhost:3000",
    staging: "https://staging.app.com",
    prod: "https://app.com",
};