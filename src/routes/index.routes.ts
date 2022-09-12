import { Express } from "express";
import { router as usersRouter } from "./users.routes";

export const init_app = (app: Express): void => {
  app.use("/api", usersRouter);
};
