import express from "express";
import "reflect-metadata";
import AppDataSource from "./config/db";
import router from './routers/router'

const app = express();

//Body parser(from node)
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Database initialize
AppDataSource.initialize()
  .then(() => {
    app.listen(3000);
  })
  .catch((error: void) => console.log(error));

//Activating the router
app.use(router);