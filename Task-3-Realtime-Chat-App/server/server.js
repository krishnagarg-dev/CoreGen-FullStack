const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const app = express();

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

app.get("/", (req, res) => {
  res.send("🚀 Real-Time Chat Server is Running...");
});

io.on("connection", (socket) => {
  console.log("✅ User Connected:", socket.id);

  socket.on("send_message", (message) => {
    console.log("📩", message);

    io.emit("receive_message", message);
  });

  socket.on("disconnect", () => {
    console.log("❌ User Disconnected:", socket.id);
  });
});

server.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});