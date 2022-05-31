import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import UserRoute from "./routes/UserRoute.js"

const app=express();
app.use(cors());
app.use(express.json());
app.use(UserRoute)
mongoose.connect("mongodb://localhost:27017/untitledDB",
 {
     useNewUrlParser: true,
     useUnifiedTopology:true
});




app.listen(5000,()=>console.log("App is running at port 5000"))
