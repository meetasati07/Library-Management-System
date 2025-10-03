import express, { Express, Request, Response } from "express";
import cors from "cors";
import { config } from "./config";
import mongoose from "mongoose";
import { registerRoutes } from "./routes";

const PORT = config.server.port;

const app: Express = express();

app.use(express.json());
app.use(cors());

(async function startUp() {
  try {
    await mongoose.connect(config.mongo.url, {
      w: "majority",
      retryWrites: true,
      authMechanism: "DEFAULT",
    });

    console.log("Connection to MongoDB succesful");

    registerRoutes(app);

    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (error) {
    console.log("Could not make a connection to the database");
  }
})();
