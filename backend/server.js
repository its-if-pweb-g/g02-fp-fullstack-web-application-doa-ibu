import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authAPI from "./routes/auth.routes.js";
import messageAPI from "./routes/message.routes.js";
import userAPI from "./routes/user.routes.js";
import connectMongoDB from "./database/connectMongoDB.js";
import { app, server } from "./socket/socket.js";

const PORT = process.env.PORT ||  5000;

dotenv.config();

app.use(express.json()); // parse incoming req with JSON payloads
app.use(cookieParser());

app.use("/api/auth", authAPI);
app.use("/api/messages", messageAPI);
app.use("/api/users", userAPI)

// app.get("/", (req, res) => {
//   res.send("Hello!");
// });

server.listen(PORT, () =>{
  connectMongoDB();
  console.log(`Server running on port ${PORT}`)
});
