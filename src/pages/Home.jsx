import { useEffect } from "react";
import { PRODUCTS } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home({ onAddToCart, onView }) {
  useEffect(() => {
    if (typeof onView === "function") onView();
  }, []); // run only on mount
  return (
    <div>

      {/* HERO SECTION */}
      <section className="bg-linear-to-r from-emerald-600 via-yellow-500 to-red-500 text-white py-24 text-center px-6">
        <h1 className="text-5xl font-extrabold mb-6">
          Shop Smart. Shop Local.
        </h1>

        <p className="text-lg max-w-2xl mx-auto text-white/90">
          Discover trusted electronics and smart devices delivered across Ethiopia.
          Fast delivery. Fair prices. Secure checkout.
        </p>

        <button className="mt-8 bg-white text-emerald-700 px-8 py-3 rounded-full font-bold hover:scale-105 transition-all shadow-lg">
          Start Shopping
        </button>
      </section>

      {/* PRODUCTS */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold mb-12 text-center text-emerald-700">
          Popular Products in Ethiopia
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {PRODUCTS.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

      </section>
    </div>
  );
}
