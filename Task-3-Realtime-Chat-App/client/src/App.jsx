import { useState, useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    if (message.trim() === "") return;

    socket.emit("send_message", message);
    setMessage("");
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => socket.off("receive_message");
  }, []);

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "50px auto",
        fontFamily: "Arial",
      }}
    >
      <h1>💬 Real-Time Chat</h1>

      <input
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{
          width: "70%",
          padding: "10px",
          marginRight: "10px",
        }}
      />

      <button onClick={sendMessage}>Send</button>

      <div style={{ marginTop: "20px" }}>
        {messages.map((msg, index) => (
          <p key={index}>🟢 {msg}</p>
        ))}
      </div>
    </div>
  );
}

export default App;