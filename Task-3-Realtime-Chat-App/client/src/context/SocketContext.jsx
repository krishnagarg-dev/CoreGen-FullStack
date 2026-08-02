import { createContext, useContext, useEffect, useState } from "react";
import { socket } from "../socket/socket";

const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const [connected, setConnected] = useState(socket.connected);

  useEffect(() => {
    if (!socket.connected) {
      socket.connect();
    }

    const onConnect = () => {
      console.log("🟢 Connected:", socket.id);
      setConnected(true);
    };

    const onDisconnect = (reason) => {
      console.log("🔴 Disconnected:", reason);
      setConnected(false);
    };

    const onConnectError = (err) => {
      console.log("❌ Connect Error:", err.message);
    };

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("connect_error", onConnectError);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("connect_error", onConnectError);
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