import { Request, Response, NextFunction } from "express";
import * as userService from "./user.service";

export async function createUserHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { name, email } = req.body;
    const user = await userService.createUser({ name, email } as any);
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
}

export async function getUsersHandler(
  _req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const users = await userService.getUsers();
    res.json(users);
  } catch (err) {
    next(err);
  }
}
