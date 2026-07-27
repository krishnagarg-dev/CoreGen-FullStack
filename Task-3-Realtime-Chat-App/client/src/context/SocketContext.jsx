import { createContext, useContext, useEffect, useState } from "react";
import { socket } from "../socket/socket";

const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    socket.connect();

    socket.on("connect", () => {
      console.log("🟢 Connected:", socket.id);
      setConnected(true);
    });

    socket.on("disconnect", () => {
      console.log("🔴 Disconnected");
      setConnected(false);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
    };
  }, []);

  return (
    <SocketContext.Provider
      value={{
        socket,
        connected,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => useContext(SocketContext);