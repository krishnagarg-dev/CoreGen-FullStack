import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSocket } from "../context/SocketContext";

function Chat() {
  const { socket } = useSocket();
  const location = useLocation();

  const username = location.state?.username || "Guest";
  const room = location.state?.room || "GLOBAL";

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [typing, setTyping] = useState("");

  const bottomRef = useRef(null);

  useEffect(() => {
    socket.on("receive_message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    socket.on("system_message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    socket.on("typing", (name) => {
      if (name !== username) {
        setTyping(`${name} is typing...`);

        setTimeout(() => {
          setTyping("");
        }, 1200);
      }
    });

    return () => {
      socket.off("receive_message");
      socket.off("system_message");
      socket.off("typing");
    };
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const sendMessage = () => {
    if (!message.trim()) return;

    socket.emit("send_message", {
      username,
      roomCode: room,
      message,
    });

    setMessage("");
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "#0f172a",
        color: "white",
      }}
    >
      <div
        style={{
          padding: "18px",
          background: "#1e293b",
          fontWeight: "bold",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>Link&Sync</span>

        <span>{room}</span>
      </div>

      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: 20,
        }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              marginBottom: 12,
              background: "#334155",
              padding: 10,
              borderRadius: 10,
            }}
          >
            <strong>{msg.username}</strong>

            <br />

            {msg.message}
          </div>
        ))}

        <div ref={bottomRef}></div>
      </div>

      <div
        style={{
          height: 24,
          paddingLeft: 20,
          color: "#94a3b8",
        }}
      >
        {typing}
      </div>

      <div
        style={{
          display: "flex",
          padding: 20,
          gap: 10,
        }}
      >
        <input
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);

            socket.emit("typing", {
              roomCode: room,
              username,
            });
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
          placeholder="Type a message..."
          style={{
            flex: 1,
            padding: 12,
            borderRadius: 10,
            border: "none",
          }}
        />

        <button
          onClick={sendMessage}
          style={{
            padding: "12px 20px",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;