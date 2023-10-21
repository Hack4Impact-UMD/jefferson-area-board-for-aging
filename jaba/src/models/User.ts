export interface User extends UserData {
    id: string;
}
  
export interface UserData {
    address: string,
    admin: boolean,
    agency: string,
    email: string,
    name: string,
    phone: string,
    title: string
}