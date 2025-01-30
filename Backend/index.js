import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { MONGO_URL, PORT } from "./constants.js";
import Grid from "./models/grid.model.js";
import userRoute from "./routes/user.routes.js"

const app = express();

app.use(cors());

app.use(userRoute)

async function dbConnect() {
  await mongoose.connect(MONGO_URL);
  console.log(`mongoose DB connected`);
}

dbConnect();

app.listen(PORT, () => console.log(`server started on port 3001`));
