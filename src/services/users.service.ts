import { Request, Response } from "express";
import { UsersRepository} from "../repositories"
import { User } from "../model"

export async function getUsers(_: Request, res: Response) {

  let users: any[];

  try {
    users = await UsersRepository.getUsers();
    
  } catch (error: any) {

    throw new Error(`error on users.service getUsers() ${error}`);
    
  }
  
  return users;
}

export async function createUser(req: Request, res: Response) {
  
  let newUser: User | undefined;
  try {
    
    const { user } = req.body;
    newUser = await UsersRepository.createUser(user);
    
  } catch (error: any) {

    throw new Error(`error on users.service createUser() ${error}`);
    
  }
  
  return newUser;
}
