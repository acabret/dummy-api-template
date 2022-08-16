import { Request, Response } from "express";
import { usersService } from "../services";

export async function getUsers(_: Request, res: Response) {
  let users;

  try {
    users = await usersService.getUsers(_, res);
  } catch (error) {
    return res.status(500).json({ message: "error 500" });
  }

  return res.status(200).json({ message: "Operación exitosa", payload: users });
}

export async function createUser(req: Request, res: Response) {
  let newUser;
  
  try {
    const { user } = req.body;
    newUser = await usersService.createUser(req, res);

  } catch (error) {
    return res.status(500).json({ message: "error 500" });
  }

  return res
    .status(200)
    .json({ message: "Operación exitosa", payload: newUser });
}
