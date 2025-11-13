import { createApp } from "./app";
import { connectDatabase } from "./app/config/database";
import { env } from "./app/config/env";

async function bootstrap() {
  await connectDatabase();

  const app = createApp();

  app.listen(env.port, () => {
    console.log(`Backend listening on port ${env.port}`);
  });
}

bootstrap().catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});
