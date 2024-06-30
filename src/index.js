// require("dontenv").config({ path: "./env" })
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";


dotenv.config({
    path: "./env"
})


// as connectDB is an async function, it will return a promise
app.on("error", (error) => {
    console.log("Error in starting server ", error)
})
connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at port: ${process.env.PORT}`)
        })
    })
    .catch(err => {
        console.log("MONGODB connection failed! ", err)
    })














// console.log(DB_NAME)
// this is an IIFE function, a semicolon is added before it so as if semicolon isn't added the line before it, so as there won't be any problems
// ; (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error) => {
//             console.error("ERROR: ", error);
//             throw error
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port ${process.env.PORT}`)
//         })

//     } catch (error) {
//         console.error("ERROR: ", error);
//         throw error
//         // exit the process on error
//         process.exit(1)
//     }
// })()


// app.on("error", (error) => {
//     console.log("error ", error)
//     throw error
// })