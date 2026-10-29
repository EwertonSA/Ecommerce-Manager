import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
    throw new Error("Missing required environment variable: DATABASE_URL");
}

export const sequelize = new Sequelize(databaseUrl, {
    dialect: "postgres",
    define: { underscored: true }
});