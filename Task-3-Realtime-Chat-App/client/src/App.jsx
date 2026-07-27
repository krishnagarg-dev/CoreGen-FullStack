import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("✅ Connected:", socket.id);
    });

    socket.on("receive_message", (msg) => {
      console.log("📥", msg);
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off("connect");
      socket.off("receive_message");
    };
  }, []);

  const sendMessage = () => {
    if (!message.trim()) return;

    console.log("📤", message);

    socket.emit("send_message", message);

    setMessage("");
  };

  return (
    <div
      style={{
        width: "500px",
        margin: "40px auto",
        fontFamily: "Arial",
      }}
    >
      <h1>💬 Real-Time Chat</h1>

      <input
        type="text"
        value={message}
        placeholder="Type message..."
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") sendMessage();
        }}
        style={{
          width: "75%",
          padding: "10px",
        }}
      />

      <button
        onClick={sendMessage}
        style={{
          padding: "10px 20px",
          marginLeft: "10px",
        }}
      >
        Send
      </button>

      <div
        style={{
          marginTop: "20px",
          border: "1px solid #ccc",
          padding: "10px",
          minHeight: "250px",
        }}
      >
        {messages.map((msg, index) => (
          <p key={index}>🟢 {msg}</p>
        ))}
      </div>
    </div>
  );
}

export default App;