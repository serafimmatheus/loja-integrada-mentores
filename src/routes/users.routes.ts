import { Router } from "express";
import usersControllers from "../controllers/users.controllers";

export const router = Router();

router.get("/users", usersControllers.getUserControllers);
