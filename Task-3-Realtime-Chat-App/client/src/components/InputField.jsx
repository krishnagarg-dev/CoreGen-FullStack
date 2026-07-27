export default function InputField({
  icon,
  placeholder,
  value,
  onChange,
  type = "text",
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/50 bg-white/60 px-4 py-3 backdrop-blur-xl transition-all duration-300 focus-within:scale-[1.02] focus-within:border-pink-300 focus-within:shadow-lg">
      {icon}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full bg-transparent outline-none text-gray-700 placeholder:text-gray-400"
      />
    </div>
  );
}