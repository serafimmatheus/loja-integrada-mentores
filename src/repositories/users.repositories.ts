import { Repository, UpdateResult } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities/User";

interface IUserRepo {
  save: (user: Partial<User>) => Promise<User>;
  getAll: () => Promise<User[]>;
  findOne: (payload: object) => Promise<User>;
  updated: (id: string, payload: Partial<User>) => Promise<UpdateResult>;
}

class UserRepo implements IUserRepo {
  private repo: Repository<User>;

  constructor() {
    this.repo = AppDataSource.getRepository(User);
  }

  save = async (user: Partial<User>) => await this.repo.save(user);

  getAll = async () => await this.repo.find();

  findOne = async (payload: object) => {
    return await this.repo.findOneBy({ ...payload });
  };

  updated = async (id: string, payload: Partial<User>) =>
    this.repo.update(id, { ...payload });
}

export default new UserRepo();
