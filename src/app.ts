import express from "express";
import { arrayDummyRoutes } from "./routes";

const app = express();

app.use(express.json());

arrayDummyRoutes(app);

app.get("/", (req, res) => res.status(200).json({ message: "api funcionando correctamente" }));

app.use((req, res, next) => {
  const newError = new Error("no se encuentra la ruta");

  res.status(404).json({ message: newError.message });
});

export default app;
