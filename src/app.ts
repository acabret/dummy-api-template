import express from "express";
import { Request, Response, NextFunction } from "express";
import { arrayDummyRoutes } from "./routes";

const app = express();

// app.use("/", express.static(`${__dirname}\\dist\\array-dummy-fe`));

app.use(express.json());

arrayDummyRoutes(app);

app.get("/health-check", (req, res) => res.status(200).json({ message: "api funcionando correctamente" }));

app.use((req: Request, res: Response, next: NextFunction) => {
  return res.status(404).end();
});

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  return res.status(500).end();
})

export default app;
