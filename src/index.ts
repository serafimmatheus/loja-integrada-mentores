import express from "express";
import { init_app } from "./routes/index.routes";

export const app = express();

app.use(express.json());

init_app(app);
