import express, { Express } from "express";
import usersRouter from "./routes/users";
export function createApp() {
  const app: Express = express();

  app.use("/api/users", usersRouter);

  return app;
}
