export interface User extends UserData {
  id: string;
}

export interface UserData {
  auth_id: string;
  email: string;
  name: string;
  role: "ADMIN" | "USER";
}
