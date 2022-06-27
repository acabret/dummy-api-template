import express from "express";
import { arrayDummyRoutes } from "./routes";

const app = express();

app.use(express.json());

arrayDummyRoutes(app);

export default app;