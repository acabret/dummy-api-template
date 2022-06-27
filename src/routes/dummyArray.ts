import { Express } from "express";
import { arrayDummyController } from "../controllers"

export default function arrayDummyRoutes(app: Express): void {
  app.get("/v1/arraydummy", arrayDummyController.getArrayDummies);
}
