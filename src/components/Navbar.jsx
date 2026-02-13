import { ShoppingCart } from "lucide-react";

export default function Navbar({ cartCount, onCartClick }) {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <h1 className="text-2xl font-extrabold bg-gradient-to-r from-emerald-600 to-yellow-500 bg-clip-text text-transparent">
          HabeshaMarket
        </h1>

        <button
          onClick={onCartClick}
          className="relative p-3 rounded-full hover:bg-emerald-100 transition-all"
        >
          <ShoppingCart size={24} className="text-gray-700" />

          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-linear-to-r from-emerald-600 to-red-500 text-white text-xs font-bold h-6 w-6 flex items-center justify-center rounded-full shadow-md">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}
