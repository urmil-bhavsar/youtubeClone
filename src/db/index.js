import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

// db is in another continent, it might even take time to connect to it, so mark it as async/await
const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected!! DB HOST: ${connectionInstance}`)

    } catch (error) {
        console.log("MONGODB connection FAILED ", error)
        process.exit(1)
    }
}

export default connectDB;