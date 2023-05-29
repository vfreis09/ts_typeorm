import "reflect-metadata"
import { DataSource } from "typeorm"
import User from "../entities/user"

//Change this 
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "yes",
    password: "admin",
    database: "test",
    entities: [User],
    synchronize: true,
    logging: false,
})