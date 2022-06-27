import http from "http";
import app from "./app";
import { config } from "./utils";

const server = http.createServer(app);

server.listen(config.PORT, () => {
  console.log(`server running on port ${config.PORT}`);
})