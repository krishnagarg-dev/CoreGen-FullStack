import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSocket } from "../context/SocketContext";

import ChatHeader from "../components/ChatHeader";
import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/ChatWindow";
import MessageInput from "../components/MessageInput";

export default function Chat() {
  const { socket } = useSocket();

  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    if (!state) {
      navigate("/", { replace: true });
    }
  }, [state, navigate]);

  if (!state) return null;

  const { username, room } = state;

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [typing, setTyping] = useState("");
  const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {
    const receiveMessage = (data) => {
      setMessages((prev) => [...prev, data]);
    };

    const systemMessage = (data) => {
      setMessages((prev) => [...prev, data]);
    };

    const typingHandler = (name) => {
      if (name === username) return;

      setTyping(`${name} is typing...`);

      setTimeout(() => {
        setTyping("");
      }, 1200);
    };
    const onlineUsersHandler = (users) => {
      console.log("ONLINE USERS:", users);
      setOnlineUsers(users);
    };

    socket.on("online_users", onlineUsersHandler);
    socket.on("receive_message", receiveMessage);
    socket.on("system_message", systemMessage);
    socket.on("typing", typingHandler);

    return () => {
      socket.off("receive_message", receiveMessage);
      socket.off("system_message", systemMessage);
      socket.off("typing", typingHandler);
      socket.off("online_users", onlineUsersHandler);
    };
  }, [socket, room, username]);

  const sendMessage = () => {
    if (!message.trim()) return;

    socket.emit("send_message", {
      message,
    });

    setMessage("");
  };

  return (
    <div className="h-screen flex">

      <Sidebar
        room={room}
        onlineUsers={onlineUsers}
      />

      <div className="flex-1 flex flex-col">

        <ChatHeader
          room={room}
          username={username}
          socket={socket}
        />

        <ChatWindow
          messages={messages}
          username={username}
        />

        <div className="h-8 px-6 flex items-center text-sm text-gray-500">
          {typing}
        </div>

        <MessageInput
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
          socket={socket}
        />

      </div>

    </div>
  );
}