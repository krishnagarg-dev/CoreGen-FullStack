import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  User,
  Globe,
  Lock,
  KeyRound,
} from "lucide-react";
import { motion } from "framer-motion";

import AuroraBackground from "../components/AuroraBackground";
import GlassCard from "../components/GlassCard";
import InputField from "../components/InputField";
import AnimatedButton from "../components/AnimatedButton";
import Logo from "../components/Logo";

import ModeCard from "../components/ModeCard";
import StatsCard from "../components/StatsCard";

import { useSocket } from "../context/SocketContext";

export default function Login() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [mode, setMode] = useState("global");

  const navigate = useNavigate();

  const { socket } = useSocket();

  const handleJoin = () => {
    if (!username.trim()) {
      alert("Please enter your username.");
      return;
    }

    // GLOBAL CHAT

    if (mode === "global") {
      socket.emit("join_global", {
        username,
      });

      navigate("/chat", {
        state: {
          username,
          room: "GLOBAL",
          type: "global",
        },
      });

      return;
    }

    // CREATE ROOM

    if (mode === "create") {
      socket.emit("create_room", {
        username,
      });

      socket.once("room_created", ({ roomCode }) => {
        navigate("/chat", {
          state: {
            username,
            room: roomCode,
            type: "private",
          },
        });
      });

      return;
    }

    // JOIN ROOM
    socket.emit("join_room", {
      username,
      roomCode: room.toUpperCase(),
    });

    socket.once("joined_room", ({ roomCode }) => {

      navigate("/chat", {
        state: {
          username,
          room: roomCode,
          type: "private",
        },
      });

    });

    socket.once("error_message", ({ message }) => {

      alert(message);

    });
  };

  return (
    <>
      <AuroraBackground />

      <div className="min-h-screen flex items-center justify-center px-4 py-6 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] items-center gap-8 lg:gap-24 max-w-7xl w-full">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:flex flex-col justify-center"
          >

            <Logo />

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .2 }}
              className="mt-12 text-6xl xl:text-7xl font-black leading-tight tracking-tight"
            >

              <span className="text-white">

                Connect.

                <br />

                Chat.

                <br />

              </span>

              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">

                Collaborate.

              </span>

            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .35 }}
              className="mt-8 max-w-lg text-lg leading-8 text-slate-300"
            >

              Premium realtime messaging platform with beautiful animations,
              private rooms and lightning-fast communication.

            </motion.p>

            <div className="grid grid-cols-3 gap-5 mt-12">

              <StatsCard
                icon="👥"
                value="250+"
                label="Users"
              />

              <StatsCard
                icon="💬"
                value="80K+"
                label="Messages"
              />

              <StatsCard
                icon="⚡"
                value="99.9%"
                label="Realtime"
              />

            </div>

          </motion.div>

          {/* RIGHT */}
          <div className="flex justify-center items-center w-full">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: .7,
                delay: .2,
              }}
            >

              <GlassCard>

                {/* Badge */}

                <div className="flex justify-center">

                  <div className="h-14 
                  w-14
                  sm:h-16
                  sm:w-16
                  text-2xl
                  sm:text-3xl
                  rounded-full
                  bg-gradient-to-br
                  from-violet-600
                  to-pink-500
                  flex
                  items-center
                  justify-center
                  shadow-xl">
                    👋
                  </div>

                </div>
                {/* Heading */}<div className="mt-4 text-center">

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                    Welcome Back
                  </h2>

                  <p className="mt-2 text-sm sm:text-base lg:text-lg text-slate-400">
                    Glad to see you again! 👋
                  </p>

                </div>
                {/* Username */}

                <div className="mt-8">

                  <InputField
                    icon={<User size={18} />}
                    placeholder="Enter Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />

                </div>

                {/* Chat Mode */}

                <div className="mt-8 space-y-3">

                  <ModeCard
                    active={mode === "global"}
                    icon="🌍"
                    title="Global Chat"
                    subtitle="Chat with everyone online"
                    onClick={() => setMode("global")}
                  />

                  <ModeCard
                    active={mode === "create"}
                    icon="➕"
                    title="Create Room"
                    subtitle="Generate a private room"
                    onClick={() => setMode("create")}
                  />

                  <ModeCard
                    active={mode === "join"}
                    icon="🔑"
                    title="Join Room"
                    subtitle="Enter room code"
                    onClick={() => setMode("join")}
                  />

                </div>

                {/* Room */}

                {mode === "join" && (

                  <div className="mt-5">

                    <InputField
                      icon={<KeyRound size={18} />}
                      placeholder="Room Code"
                      value={room}
                      onChange={(e) =>
                        setRoom(e.target.value.toUpperCase())
                      }
                    />

                  </div>

                )}

                {/* Button */}

                <div className="mt-8">

                  <AnimatedButton
                    onClick={handleJoin}
                  >

                    Continue

                  </AnimatedButton>

                </div>

                {/* Footer */}

                <div className="mt-5 flex flex-wrap justify-center gap-3 text-xs text-slate-500">
                  <span>⚡ Realtime</span>

                  <span>🔒 Secure</span>

                  <span>🌍 Global</span>

                </div>

              </GlassCard>

            </motion.div>

          </div>

        </div>
      </div >
    </>
  );
}