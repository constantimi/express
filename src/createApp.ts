import express, { Express } from "express";
import usersRouter from "./routes/users";
import stocksRouter from "./routes/stocks";

export function createApp() {
  const app: Express = express();

  app.use("/api/users", usersRouter);
  app.use("/api/stocks", stocksRouter);

  return app;
}
