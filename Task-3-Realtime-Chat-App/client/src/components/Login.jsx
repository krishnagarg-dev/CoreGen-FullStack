import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Hash } from "lucide-react";
import { motion } from "framer-motion";

import AuroraBackground from "../components/AuroraBackground";
import GlassCard from "../components/GlassCard";
import InputField from "../components/InputField";
import AnimatedButton from "../components/AnimatedButton";
import Logo from "../components/Logo";

export default function Login() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  const navigate = useNavigate();

  const handleJoin = () => {
    if (!username.trim() || !room.trim()) return;

    navigate("/chat", {
      state: {
        username,
        room,
      },
    });
  };

  return (
    <>
      <AuroraBackground />

      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl w-full">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            className="hidden lg:block"
          >
            <Logo />

            <h1 className="mt-10 text-6xl font-bold leading-tight text-gray-800">
              Connect.
              <br />
              Chat.
              <br />
              Collaborate.
            </h1>

            <p className="mt-6 text-lg text-gray-500 max-w-lg leading-8">
              Experience beautiful real-time messaging with
              smooth animations, elegant design and lightning-fast
              communication.
            </p>
          </motion.div>

          {/* Right */}

          <GlassCard>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .3 }}
            >

              <h2 className="text-3xl font-bold text-gray-800">
                Welcome Back 👋
              </h2>

              <p className="text-gray-500 mt-2">
                Join your room and start chatting instantly.
              </p>

              <div className="mt-8 space-y-5">

                <InputField
                  icon={<User size={20} className="text-pink-500" />}
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />

                <InputField
                  icon={<Hash size={20} className="text-violet-500" />}
                  placeholder="Room Name"
                  value={room}
                  onChange={(e) => setRoom(e.target.value)}
                />

                <AnimatedButton
                  onClick={handleJoin}
                >
                  Join Conversation →
                </AnimatedButton>

              </div>

            </motion.div>

          </GlassCard>

        </div>
      </div>
    </>
  );
}