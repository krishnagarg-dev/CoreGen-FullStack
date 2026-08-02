import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";

export default function ChatWindow({
  messages,
  username,
}) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <div
      className="
      flex-1
      overflow-y-auto
      px-6
      py-5
      bg-gradient-to-b
      from-[#faf8ff]
      to-[#f4f1ff]
      "
    >
      <div className="max-w-5xl mx-auto">
        {messages.map((msg, index) => (
          <MessageBubble
            key={index}
            msg={msg}
            mine={msg.username === username}
          />
        ))}

        <div ref={bottomRef}></div>
      </div>
    </div>
  );
}