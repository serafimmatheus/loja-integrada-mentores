import { userRepo } from "../repositories";

class UsersServices {
  createUsersServices = async () => {};

  getUsersServices = async () => {
    const users = await userRepo.getAll();

    return users;
  };

  updatedUsersServices = async () => {};

  deletedUsersServices = async () => {};
}

export default new UsersServices();
