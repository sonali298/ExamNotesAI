import mongoose from "mongoose";

let connectionPromise;

const connectDb = async () => {
    if (mongoose.connection.readyState === 1) {
        return mongoose.connection;
    }

    if (!process.env.MONGODB_URL) {
        throw new Error("MONGODB_URL is not configured");
    }

    if (!connectionPromise) {
        connectionPromise = mongoose.connect(process.env.MONGODB_URL, {
            serverSelectionTimeoutMS: 8000,
            connectTimeoutMS: 8000,
        }).catch((error) => {
            connectionPromise = undefined;
            throw error;
        });
    }

    await connectionPromise;
    return mongoose.connection;
}
export default connectDb;
