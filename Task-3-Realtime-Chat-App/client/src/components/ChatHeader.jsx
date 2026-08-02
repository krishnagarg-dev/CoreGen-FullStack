import { Copy, LogOut, Wifi } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ChatHeader({
  room,
  username,
  socket,
}) {
  const navigate = useNavigate();

  const leaveChat = () => {
    if (!confirm("Leave Chat?")) return;

    socket.disconnect();

    navigate("/");
  };

  const copyRoom = async () => {
    try {
      await navigator.clipboard.writeText(room);
      alert("Room Code Copied");
    } catch {
      alert("Failed to copy room code");
    }
  };

  return (
    <div
      className="
      h-20
      px-8
      flex
      items-center
      justify-between
      bg-white/60
      backdrop-blur-2xl
      border-b
      border-white/30
      "
    >
      <div>
        <h1 className="text-2xl font-bold">
          {room}
        </h1>

        <div className="flex items-center gap-3 mt-1">
          <span className="text-gray-500">
            {username}
          </span>

          <div className="flex items-center gap-1 text-green-600">
            <Wifi size={15} />
            Connected
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={copyRoom}
          className="
          px-4
          py-2
          rounded-xl
          bg-violet-100
          hover:bg-violet-200
          transition
          flex
          items-center
          gap-2
          "
        >
          <Copy size={18} />
          Copy
        </button>

        <button
          onClick={leaveChat}
          className="
          px-4
          py-2
          rounded-xl
          bg-red-500
          hover:bg-red-600
          text-white
          transition
          flex
          items-center
          gap-2
          "
        >
          <LogOut size={18} />
          Leave
        </button>
      </div>
    </div>
  );
}