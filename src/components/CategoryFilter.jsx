export default function CategoryFilter({ categories, active, setActive }) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-10">
      {["All", ...categories].map(cat => (
        <button
          key={cat}
          onClick={() => setActive(cat)}
          className={`px-5 py-2 rounded-full font-semibold transition 
          ${active === cat 
            ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
            : "bg-white border hover:bg-gray-50"}`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
