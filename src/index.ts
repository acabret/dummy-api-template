import http from "http";
import app from "./app";
import { config } from "./utils";
import { sequelizeConnection, dbInit } from "./db"
import { User } from "./model"

const server = http.createServer(app);

server.listen(config.PORT, async () => {
  console.log(`server running on port ${config.PORT}`);

  console.log("bd name", sequelizeConnection.getDatabaseName());

  await dbInit();

  console.log("connected succesfully to the database");
  
  
})