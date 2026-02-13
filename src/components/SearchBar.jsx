import { Search } from "lucide-react";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="max-w-xl mx-auto mb-8 relative">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search products..."
        className="w-full px-5 py-3 pl-12 rounded-full border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
      />

      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
      />
    </div>
  );
}
