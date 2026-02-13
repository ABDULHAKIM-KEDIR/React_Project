import { useState, useCallback } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

export default function App() {

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    // do not open the overlay cart automatically when adding items
  };

  const updateQty = (id, delta) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const hideCart = useCallback(() => setShowCart(false), []);

  const navigate = useNavigate();

  const handleCartClick = () => {
    hideCart();
    navigate("/cart");
  };

  return (
    <div className={`min-h-screen transition-all duration-500 
      ${cart.length > 0 ? "bg-gradient-to-br from-emerald-50 to-yellow-50" : "bg-gray-50"}`}>

      <Navbar
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        onCartClick={handleCartClick}
      />

      <Routes>
        <Route
          path="/"
          element={<Home onAddToCart={addToCart} onView={hideCart} />}
        />
        <Route
          path="/cart"
            element={
              <Cart
                cart={cart}
                onUpdateQty={updateQty}
                onRemove={removeItem}
                isPage={true}
              />
            }
        />
      </Routes>

      {showCart && (
        <Cart
          cart={cart}
          onUpdateQty={updateQty}
            onRemove={removeItem}
            isPage={false}
        />
      )}
    </div>
  );
}
