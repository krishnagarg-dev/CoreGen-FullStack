import { users, rooms } from "../data/store.js";
import { generateRoomCode } from "../utils/roomGenerator.js";

export const socketHandler = (io) => {

  const emitOnlineUsers = () => {

    const allUsers = Array.from(users.values());

    // Global Room
    io.to("GLOBAL").emit(
      "online_users",
      allUsers.filter((user) => user.room === "GLOBAL")
    );

    // Private Rooms
    rooms.forEach((_, roomCode) => {
      io.to(roomCode).emit(
        "online_users",
        allUsers.filter((user) => user.room === roomCode)
      );
    });

    console.log("ONLINE USERS =>", allUsers);

  };

  io.on("connection", (socket) => {

    console.log(`🟢 ${socket.id} connected`);

    // ===========================
    // JOIN GLOBAL CHAT
    // ===========================

    socket.on("join_global", ({ username }) => {

      users.set(socket.id, {
        username,
        room: "GLOBAL",
      });

      socket.join("GLOBAL");

      io.to("GLOBAL").emit("system_message", {
        username: "System",
        message: `${username} joined Global Chat`,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      });

      emitOnlineUsers();

    });

    // ===========================
    // CREATE ROOM
    // ===========================

    socket.on("create_room", ({ username }) => {

      const roomCode = generateRoomCode();

      rooms.set(roomCode, []);

      users.set(socket.id, {
        username,
        room: roomCode,
      });

      rooms.get(roomCode).push(socket.id);

      socket.join(roomCode);

      socket.emit("room_created", {
        roomCode,
      });

      io.to(roomCode).emit("system_message", {
        username: "System",
        message: `${username} created the room`,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      });

      emitOnlineUsers();

      socket.emit(
        "online_users",
        Array.from(users.values()).filter((u) => u.room === roomCode)
      );

    });

    // ===========================
    // JOIN ROOM
    // ===========================

    socket.on("join_room", ({ username, roomCode }) => {

      const code = roomCode.toUpperCase();

      if (!rooms.has(code)) {
        socket.emit("error_message", {
          message: "Invalid Room Code",
        });
        return;
      }

      users.set(socket.id, {
        username,
        room: code,
      });

      rooms.get(code).push(socket.id);

      socket.join(code);

      socket.emit("joined_room", {
        roomCode: code,
      });

      io.to(code).emit("system_message", {
        username: "System",
        message: `${username} joined the room`,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      });

      emitOnlineUsers();

      socket.emit(
        "online_users",
        Array.from(users.values()).filter((u) => u.room === code)
      );

    });

    // ===========================
    // SEND MESSAGE
    // ===========================

    socket.on("send_message", ({ message }) => {

      const user = users.get(socket.id);

      if (!user) return;

      io.to(user.room).emit("receive_message", {
        username: user.username,
        message,
        room: user.room,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      });

    });

    // ===========================
    // TYPING
    // ===========================

    socket.on("typing", () => {

      const user = users.get(socket.id);

      if (!user) return;

      socket.to(user.room).emit("typing", user.username);

    });

    // ===========================
    // DISCONNECT
    // ===========================

    socket.on("disconnect", () => {

      const user = users.get(socket.id);

      if (!user) return;

      io.to(user.room).emit("system_message", {
        username: "System",
        message: `${user.username} left the chat`,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      });

      if (rooms.has(user.room)) {

        const updatedRoom = rooms
          .get(user.room)
          .filter((id) => id !== socket.id);

        if (updatedRoom.length === 0) {
          rooms.delete(user.room);
        } else {
          rooms.set(user.room, updatedRoom);
        }

      }

      users.delete(socket.id);

      emitOnlineUsers();

      console.log(`🔴 ${socket.id} disconnected`);

    });

  });

};