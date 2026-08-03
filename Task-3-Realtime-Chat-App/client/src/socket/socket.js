import { io } from "socket.io-client";

export const socket = io("https://link-sync-backend.onrender.com", {
  autoConnect: false,
  reconnection: true,
  reconnectionAttempts: Infinity,
  reconnectionDelay: 1000,
});