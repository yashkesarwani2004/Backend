import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

//configration kara hai
app.use(cors({
    origin: process.env.CORS_ORIGIN, //ye sirf yahi ko allow karega backend access karne ko
    credentials: true
}))

//aab ye limit set kar raha json me aayga data kuch url me aise hi sab se aayga to usko limit kar rhe
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true,  limit: "16kb"}))
app.use(express.static("public")) //iska matlab koi bhi chij jaise photovideo ye sab jo public ho koindikkat nahi usko yaha rakh lege jo public karke file banaya hai usme
app.use(cookieParser())


export {app}