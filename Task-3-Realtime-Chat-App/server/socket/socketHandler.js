import { users, rooms } from "../data/store.js";
import { generateRoomCode } from "../utils/roomGenerator.js";

export const socketHandler = (io) => {
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

      io.emit("online_users", Array.from(users.values()));
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

      io.emit("online_users", Array.from(users.values()));
    });

    // ===========================
    // JOIN ROOM
    // ===========================

    socket.on("join_room", ({ username, roomCode }) => {
      if (!rooms.has(roomCode)) {
        socket.emit("error_message", "Invalid Room Code");
        return;
      }

      users.set(socket.id, {
        username,
        room: roomCode,
      });

      rooms.get(roomCode).push(socket.id);

      socket.join(roomCode);

      io.to(roomCode).emit("system_message", {
        username: "System",
        message: `${username} joined the room`,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      });

      io.emit("online_users", Array.from(users.values()));
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

        if (updatedRoom.length === 0 && user.room !== "GLOBAL") {
          rooms.delete(user.room);
        } else {
          rooms.set(user.room, updatedRoom);
        }
      }

      users.delete(socket.id);

      io.emit("online_users", Array.from(users.values()));

      console.log(`🔴 ${socket.id} disconnected`);
    });
  });
};