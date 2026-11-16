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

updateUserData(1 , {name: "Reyad"});