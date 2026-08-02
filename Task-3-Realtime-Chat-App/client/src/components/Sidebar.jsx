import { Copy, Users } from "lucide-react";
import OnlineUsers from "./OnlineUsers";

export default function Sidebar({ room, onlineUsers }) {
  return (
    <div className="w-72 border-r border-white/30 bg-white/60 backdrop-blur-2xl p-6 flex flex-col">

      {/* Logo */}

      <h1 className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-pink-500 bg-clip-text text-transparent">
        Link&Sync
      </h1>

      {/* Room */}

      <div className="mt-8">

        <p className="text-xs uppercase tracking-widest text-gray-400">
          Current Room
        </p>

        <div className="mt-2 font-semibold text-lg break-all">
          {room}
        </div>

        <button
          onClick={() => {
            navigator.clipboard.writeText(room);
            alert("Room Code Copied");
          }}
          className="
          mt-4
          flex
          items-center
          gap-2
          rounded-xl
          bg-violet-100
          px-4
          py-2
          text-violet-700
          hover:bg-violet-200
          transition
          "
        >
          <Copy size={16} />
          Copy Room Code
        </button>

      </div>

      <hr className="my-8 border-white/40" />

      {/* Online Users */}

      <div className="flex items-center gap-2 mb-5">

        <Users size={18} />

        <h2 className="font-semibold">
          Online Users ({onlineUsers.length})
        </h2>

      </div>

      <OnlineUsers onlineUsers={onlineUsers} />

    </div>
  );
}