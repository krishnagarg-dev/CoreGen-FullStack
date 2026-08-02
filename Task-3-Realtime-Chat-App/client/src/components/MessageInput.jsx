import { Send } from "lucide-react";

export default function MessageInput({
  message,
  setMessage,
  sendMessage,
  socket,
}) {
  return (
    <div className="border-t border-white/40 bg-white/60 backdrop-blur-xl p-5">

      <div className="flex gap-4">

        <input
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            socket.emit("typing");
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
          placeholder="Write a message..."
          className="
          flex-1
          rounded-2xl
          px-6
          py-4
          bg-white
          border
          border-gray-200
          outline-none
          focus:border-violet-400
          transition
          "
        />

        <button
          onClick={sendMessage}
          className="
          h-14
          w-14
          rounded-2xl
          bg-gradient-to-r
          from-violet-500
          to-fuchsia-500
          text-white
          flex
          items-center
          justify-center
          hover:scale-105
          transition
          "
        >
          <Send size={20}/>
        </button>

      </div>

    </div>
  );
}