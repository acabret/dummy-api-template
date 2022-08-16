import { Express } from "express";
import { usersController } from "../controllers"

export default function usersRoutes(app: Express): void {
  app.get("/v1/users/", usersController.getUsers);
  app.post("/v1/users/", usersController.createUser);
}
