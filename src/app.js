import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

// app.use is used when you want to use middlewares or want to do some configurations

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({ limit: "16kb" })) //to accept data in json format

// in url "urmil bhavsar" becomes "urmil%20bhavsar" so to accept data from such urls and to accept nested objects, urlencoded is used
app.use(express.urlencoded({ extended: true, limit: "16kb" }))

// if i want to store some assests such as images, files which I am receiving, I can store it in a folder using express.static
app.use(express.static("public"))


// to access and store cookies on user's browser, basically to perform crud operation on cookies, to store secure cookies on user's browser which can be added or removed only by user
app.use(cookieParser())

export { app }