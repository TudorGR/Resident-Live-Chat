import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const server = createServer(app, {
  cors: "*",
});
const io = new Server(server, {
  cors: "*",
});

io.on("connection", (socket) => {
  console.log("User connected");
  io.emit("users", io.engine.clientsCount);

  socket.on("message", (msg) => {
    io.emit("message", msg);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
    io.emit("users", io.engine.clientsCount);
  });
});

app.get("/", (_, res) => res.send("Server running"));

server.listen(5000, () =>
  console.log("Server is running at http://localhost:5000"),
);
