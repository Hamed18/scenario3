import express from "express";
import cors from "cors";
import { healthRouter } from "./app/modules/health";
import { userRouter } from "./app/modules/user";
import { metricsMiddleware, metricsRouter } from "./app/modules/observability";
import { errorHandler } from "./shared/middlewares/errorHandler";

export function createApp() {
  const app = express();

  // global middlewares
  app.use(cors());
  app.use(express.json());

  // metrics middleware (request duration)
  app.use(metricsMiddleware);

  // routes
  app.use("/api/health", healthRouter);
  app.use("/api/users", userRouter);
  app.use("/metrics", metricsRouter);

  // error handler (last)
  app.use(errorHandler);

  return app;
}
