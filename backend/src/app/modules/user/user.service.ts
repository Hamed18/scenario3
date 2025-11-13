import { UserModel, IUser } from "./user.model";

export async function createUser(data: Pick<IUser, "name" | "email">) {
  return UserModel.create(data);
}

export async function getUsers() {
  return UserModel.find().lean();
}
