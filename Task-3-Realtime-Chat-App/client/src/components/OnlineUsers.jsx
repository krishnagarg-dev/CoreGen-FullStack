export default function OnlineUsers({ onlineUsers }) {
  if (onlineUsers.length === 0) {
    return (
      <p className="text-gray-400 text-sm">
        No users online
      </p>
    );
  }

  return (
    <div className="space-y-3">

      {onlineUsers.map((user, index) => (

        <div
          key={index}
          className="
          flex
          items-center
          gap-3
          rounded-xl
          bg-white/50
          px-4
          py-3
          shadow-sm
          hover:bg-white/80
          transition
          "
        >

          <div className="w-3 h-3 rounded-full bg-green-500"></div>

          <span className="font-medium">
            {user.username}
          </span>

        </div>

      ))}

    </div>
  );
}