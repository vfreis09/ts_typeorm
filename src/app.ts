import express from "express";
import "reflect-metadata";
import AppDataSource  from "./entities/user"

const app = express();

AppDataSource.initialize()
  .then(() => {
    app.listen(3000);
  })
  .catch((error: never) => console.log(error));

app.get('/', (req, res) => {
  res.send('Hello World!');
});