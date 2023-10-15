export interface TestUser extends TestUserData {
    id: string;
}
  
export interface TestUserData {
    address: string,
    admin: boolean,
    agency: string,
    email: string,
    name: string,
    phone: string,
    title: string
}