import dotenv from "dotenv";
dotenv.config();

interface IEnvVarriable {
  PORT: string;
  DB_URL: string;
  NODE_ENV: string;
}

const loadEnvVariables = (): IEnvVarriable => {
  const requiredEnvVarriables: string[] = ["PORT", "DB_URL", "NODE_ENV"];
  requiredEnvVarriables.forEach((key) => {
    if (!process.env[key]) {
      throw new Error(`Missing required environment variable: ${key}`);
    }
  });
  return {
    PORT: process.env.PORT as string,
    DB_URL: process.env.DB_URL as string,
    NODE_ENV: process.env.NODE_ENV as string,
  };
};

export const envVars = loadEnvVariables();
