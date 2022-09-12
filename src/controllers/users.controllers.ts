import { Request, Response } from "express";
import usersServices from "../services/users.services";

class UsersControllers {
  createUserControllers = async (req: Request, res: Response) => {};

  getUserControllers = async (_: Request, res: Response) => {
    const users = await usersServices.getUsersServices();

    return res.status(200).json(users);
  };

  updatedUserControllers = async (req: Request, res: Response) => {};

  deletedUserControllers = async (req: Request, res: Response) => {};
}

export default new UsersControllers();
