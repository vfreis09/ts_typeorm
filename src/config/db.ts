import "reflect-metadata";
import { DataSource } from "typeorm";
import Car from "../entities/car";
import 'dotenv/config';

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: process.env.USERNAME_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.DB_NAME,
    entities: [Car],
    synchronize: true,
    logging: false,
});

export default AppDataSource;