import dotenv from "dotenv";
dotenv.config();
import { MongoClient } from "mongodb";

const MONGO_USER = process.env.MONGO_USER;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const MONGO_CLUSTER = process.env.MONGO_CLUSTER;

const MONGO_URL = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_CLUSTER}.a72mmwd.mongodb.net/?retryWrites=true&w=majority&appName=AdvanceNodeJs`;

const client = new MongoClient(MONGO_URL);

let connection;
export let database;

export async function connectToDatabase() {
    if (!connection) {
        try {
            
            connection = await client.connect();
            database = connection.db("Database");
            console.log("Successfully connected to MongoDB");
        } catch (error) {
            console.log("Error while connecting to MongoDB:", error);
        }

        return connection;
    }
}

export function getDb() {
    if (!connection) {
       
        throw new Error("Error while initializing database connection");
    }

    return database;
}
