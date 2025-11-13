
import dotenv from "dotenv";

dotenv.config();

export const env = {
  port: Number(process.env.PORT) || 3000,
  nodeEnv: process.env.NODE_ENV || "development",
  mongoUri:
    process.env.MONGO_URI || "mongodb+srv://hamedshartaz99:gZuxty0Dg8Le5lbJ@cluster0.mc4wmdt.mongodb.net/observabilityApp?retryWrites=true&w=majority&appName=Cluster0"
};



// BCRYPT_SALT_ROUNDS = 12
















