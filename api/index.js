const express = require("express");
const dotenv = require("dotenv");
const multer = require("multer");
const path = require("path");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");


const app = express();
dotenv.config();
app.use(express.json());

mongoose
    .connect(process.env.MONGO_URL)
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));


// try{
//     mongoose.connect(process.env.MONGO_URL);
//     console.log("Connected to MongoDB");
// } catch(err) {
//     console.log(err);
//     console.log("Couldn't connect to MongoDB");
// }


app.use("/api/auth", authRoute);

app.listen("5000", () => {
    console.log("Backend is running.");
})