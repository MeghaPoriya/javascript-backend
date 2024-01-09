import mongoose from "mongoose";
import { DB_NAME } from "../src/constants";


const connect = async () => {
    try {
      const connectionInstance await mongoose.connect(`${process.env.MONGODB_UR}/${DB_NAME}`) 
      console.log(`\n MongoDB connected !! DB HOST: $`)
    } catch (error) {
        console.log("MONGODB connection error", error);
        process.exit(1)
    }
}