import { motion } from "framer-motion";

export default function MessageBubble({ msg, mine }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={`w-full flex mb-4 ${
        mine ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`
          max-w-[70%]
          px-4
          py-3
          rounded-2xl
          shadow-lg
          break-words
          ${
            mine
              ? "bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-br-md"
              : "bg-white text-black rounded-bl-md border"
          }
        `}
      >
        <p className="text-xs font-semibold opacity-80">
          {msg.username}
        </p>

        <p className="mt-1 whitespace-pre-wrap">
          {msg.message}
        </p>

        <p
          className={`text-[11px] mt-2 ${
            mine ? "text-right text-violet-100" : "text-right text-gray-500"
          }`}
        >
          {msg.time}
        </p>
      </div>
    </motion.div>
  );
}