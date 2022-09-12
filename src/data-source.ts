import * as env from "dotenv";
import path from "path";

import "reflect-metadata";
import { DataSource } from "typeorm";

env.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,

  username: process.env.POSTGRESS_USER,
  password: process.env.POSTGRESS_PWD,
  database: process.env.POSTGRESS_DB,

  synchronize: false,
  logging: true,
  entities: [path.join(__dirname, "/entities/**/*.{ts,js}")],
  migrations: [path.join(__dirname, "/migrations/**/*.{ts,js}")],
});
