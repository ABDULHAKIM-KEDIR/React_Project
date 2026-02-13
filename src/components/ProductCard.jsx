import { motion } from "framer-motion";
import Rating from "./Rating";

export default function ProductCard({ product, onAddToCart }) {

  const finalPrice = product.discount || product.price;

  return (
    <motion.div
      whileHover={{ y: -10 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="relative bg-white rounded-3xl p-4 shadow-md hover:shadow-2xl border border-gray-100"
    >
      {product.badge && (
        <span className="absolute top-4 left-4 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
          {product.badge}
        </span>
      )}

      <div className="aspect-4/5 overflow-hidden rounded-2xl bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-110 transition duration-500"
        />
      </div>

      <h3 className="mt-4 font-bold text-lg text-gray-800">
        {product.name}
      </h3>

      <Rating value={product.rating} />

      <div className="mt-3 flex items-center justify-between">
        <div>
          {product.discount && (
            <span className="text-gray-400 line-through mr-2">
              ${product.price}
            </span>
          )}
          <span className="text-xl font-bold text-emerald-600">
            ${finalPrice}
          </span>
        </div>

        <button
          onClick={() => onAddToCart({ ...product, price: finalPrice })}
          className="bg-linear-to-r from-emerald-600 to-yellow-500 text-white px-4 py-2 rounded-xl hover:scale-105 active:scale-95 transition-all shadow-md"
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
}
