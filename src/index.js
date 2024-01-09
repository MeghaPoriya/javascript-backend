import mongoose from "mongoose";
import { DB_NAME } from "./constants";




import express from "express"
const app = express()

( async ()=> {
    try {
       await mongoose.connect(`${process.envMONGODB_URL}/${
        envMONGODB_URL}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERROR:", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            Console.log(`App is listening on port $ {process.env.PORT}`);
        })
    } catch (error) {
        console.log("ERROR:", erro)
        throw err
    }
})()
