import { Request, Response } from "express";
import { arrayDummyService } from "../services";

export async function getArrayDummies(_: Request, res: Response) {
  let arrayDummies;

  try {
    arrayDummies = await arrayDummyService.getArrayDummies(_, res);
  } catch (error) {
    return res.status(500).json({ message: "error 500" });
  }

  return res.status(200).json({ message: "Operación exitosa", payload: arrayDummies });
}
