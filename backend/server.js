import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectToDb from "./config/dp.js";
import seedDb from "./seeder.js";
import quizRoute from "./routes/quizRoute.js";
import announcementRoute from "./routes/announcementRoute.js";
import bodyParser from "body-parser";
import errorHandler from "./middleware/errorHandler.js";
import userRoute from "./routes/userRoute.js"
import session from "express-session";

dotenv.config();
// seeding db , connecToDb is in seeding comment connectToDb below
// seedDb();

connectToDb();

const app = express(); 
const port = process.env.PORT;

app.use(cors());
app.use(
  session({
    // todo : store it in .env and include .env in .ignore and make .envtemp for githup
    secret: 'secret', 
    resave: false,
    saveUninitialized: true,
  })
);

app.use(bodyParser.json());

app.use("/api/users/", userRoute);
app.use("/api/announcements/", announcementRoute);
app.use("/api/quizes/", quizRoute);

app.use(errorHandler);

app.listen(port, ()=>{
  console.log("listening on port",port)
});
// 