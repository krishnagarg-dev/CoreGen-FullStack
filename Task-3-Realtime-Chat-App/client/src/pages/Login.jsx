import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../context/SocketContext";

function Login() {
  const navigate = useNavigate();
  const { socket, connected } = useSocket();

  const [username, setUsername] = useState("");
  const [roomCode, setRoomCode] = useState("");
  const [mode, setMode] = useState("global");

  const handleContinue = () => {
    if (!username.trim()) {
      alert("Enter your username");
      return;
    }

    if (mode === "global") {
      socket.emit("join_global", { username });

      navigate("/chat", {
        state: {
          username,
          room: "GLOBAL",
          type: "global",
        },
      });
    }

    if (mode === "create") {
      socket.emit("create_room", { username });

      socket.once("room_created", (data) => {
        navigate("/chat", {
          state: {
            username,
            room: data.roomCode,
            type: "private",
          },
        });
      });
    }

    if (mode === "join") {
      if (!roomCode.trim()) {
        alert("Enter Room Code");
        return;
      }

      socket.emit("join_room", {
        username,
        roomCode,
      });

      navigate("/chat", {
        state: {
          username,
          room: roomCode,
          type: "private",
        },
      });
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#0f172a",
        color: "white",
      }}
    >
      <div
        style={{
          width: 380,
          padding: 30,
          borderRadius: 20,
          background: "#1e293b",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Link&Sync</h1>

        <p style={{ textAlign: "center" }}>
          {connected ? "🟢 Connected" : "🔴 Connecting"}
        </p>

        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            width: "100%",
            padding: 12,
            marginTop: 20,
            marginBottom: 20,
          }}
        />

        <div>
          <label>
            <input
              type="radio"
              checked={mode === "global"}
              onChange={() => setMode("global")}
            />
            Global Chat
          </label>

          <br />

          <label>
            <input
              type="radio"
              checked={mode === "create"}
              onChange={() => setMode("create")}
            />
            Create Room
          </label>

          <br />

          <label>
            <input
              type="radio"
              checked={mode === "join"}
              onChange={() => setMode("join")}
            />
            Join Room
          </label>
        </div>

        {mode === "join" && (
          <input
            placeholder="Room Code"
            value={roomCode}
            onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
            style={{
              width: "100%",
              padding: 12,
              marginTop: 20,
            }}
          />
        )}

        <button
          onClick={handleContinue}
          style={{
            width: "100%",
            marginTop: 25,
            padding: 12,
            cursor: "pointer",
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default Login;