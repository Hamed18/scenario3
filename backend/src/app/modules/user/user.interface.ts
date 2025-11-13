import { USER_ROLE } from "./user.constants";

export interface IUser {
  name: string;
  email: string;
  password: string;
  role: "Admin" | "Gamer";
  isActive: boolean;
  whatsapp: string;
  address: string;
  institution: string;
  gameUID: string;
}

export type TUserRole = keyof typeof USER_ROLE;
