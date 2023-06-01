import express from "express";
import "reflect-metadata";
import AppDataSource from "./config/db";

const app = express();

AppDataSource.initialize()
  .then(() => {
    app.listen(3000);
  })
  .catch((error: void) => console.log(error));

app.get('/', (req, res) => {
  res.send('Hello World!');
});