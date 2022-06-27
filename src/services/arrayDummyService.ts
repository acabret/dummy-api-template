import { Request, Response } from "express";
import { dummyApi } from "../apis";
import { DummyUser } from "../interfaces";

export async function getArrayDummies(_: Request, res: Response) {

  let arrayDummies: DummyUser[];

  try {
    const dummyResponse = await dummyApi.get<DummyUser[]>("");
    arrayDummies = dummyResponse.data;
    
  } catch (error: any) {

    throw new Error(error);
    
  }
  

  return arrayDummies;
}
