import { MessageCircleMore } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="rounded-2xl bg-gradient-to-br from-pink-300 to-violet-300 p-3 text-white shadow-lg">
        <MessageCircleMore size={26} />
      </div>

      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          ChatVerse
        </h1>
        <p className="text-sm text-gray-500">
          Real-Time Collaboration
        </p>
      </div>
    </div>
  );
}