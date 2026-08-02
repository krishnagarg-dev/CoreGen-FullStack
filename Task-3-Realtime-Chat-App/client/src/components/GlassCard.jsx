import { useState } from "react";
import {
  Hand,
  Globe,
  Lock,
  KeyRound,
  Shield,
  ArrowRight,
} from "lucide-react";

import InputField from "./InputField";
import ModeCard from "./ModeCard";
import AnimatedButton from "./AnimatedButton";

const GlassCard = () => {
  const [selectedMode, setSelectedMode] = useState("global");

  return (
    <div className="glass-card">

      {/* Floating Stars */}
      <span className="star star-1"></span>
      <span className="star star-2"></span>
      <span className="star star-3"></span>
      <span className="star star-4"></span>

      {/* Top Icon */}
      <div className="welcome-icon">
        <Hand size={28} />
      </div>

      {/* Heading */}
      <h1 className="glass-title">
        Welcome Back
      </h1>

      <p className="glass-subtitle">
        Glad to see you again! 👋
      </p>

      {/* Username */}
      <InputField />

      {/* Modes */}
      <p className="mode-heading">
        Choose how you want to start chatting
      </p>

      <ModeCard
        active={selectedMode === "global"}
        onClick={() => setSelectedMode("global")}
        icon={<Globe size={28} />}
        title="Global Chat"
        description="Join and chat with everyone around the world"
      />

      <ModeCard
        active={selectedMode === "private"}
        onClick={() => setSelectedMode("private")}
        icon={<Lock size={28} />}
        title="Create Private Room"
        description="Create your own room and invite your friends"
      />

      <ModeCard
        active={selectedMode === "join"}
        onClick={() => setSelectedMode("join")}
        icon={<KeyRound size={28} />}
        title="Join Existing Room"
        description="Enter a room code and join instantly"
      />

      {/* Button */}
      <AnimatedButton
        text="Enter Link&Sync"
        icon={<ArrowRight size={28} />}
      />

      {/* Footer */}
      <div className="glass-footer">
        <Shield size={18} />
        <span>Your conversations are secure and private</span>
      </div>

    </div>
  );
};

export default GlassCard;