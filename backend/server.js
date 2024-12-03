import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authAPI from "./routes/auth.routes.js";
import messageAPI from "./routes/message.routes.js";
import connectMongoDB from "./database/connectMongoDB.js";

const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();

app.use(express.json()); // parse incoming req with JSON payloads
app.use(cookieParser());

app.use("/api/auth", authAPI);
app.use("/api/messages", messageAPI);

// app.get("/", (req, res) => {
//   res.send("Hello!");
// });

app.listen(PORT, () =>{
  connectMongoDB();
  console.log(`Server running on port ${PORT}`)
});
