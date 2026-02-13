import { Minus, Plus, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Cart({ cart, onUpdateQty, onRemove, isPage = false }) {

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (isPage) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Your Cart</h2>

          {cart.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-gray-600 mb-4">Your cart is empty.</p>
              <Link to="/" className="inline-block bg-emerald-600 text-white px-5 py-2 rounded-lg shadow">Continue Shopping</Link>
            </div>
          ) : (
            <>
              <div className="space-y-6">
                {cart.map(item => (
                  <div key={item.id} className="flex items-center gap-6">
                    <img src={item.image} className="w-24 h-24 rounded-lg object-cover" />
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-lg">{item.name}</h4>
                          <p className="text-sm text-gray-500">{item.description || ''}</p>
                        </div>
                        <button onClick={() => onRemove(item.id)} className="text-gray-400 hover:text-gray-700">
                          <X size={18} />
                        </button>
                      </div>

                      <div className="mt-3 flex items-center gap-4">
                        <div className="text-lg font-bold text-emerald-600">${item.price}</div>
                        <div className="flex items-center gap-2">
                          <button onClick={() => onUpdateQty(item.id, -1)} className="px-3 py-1 border rounded"> <Minus size={14} /> </button>
                          <span className="px-3">{item.quantity}</span>
                          <button onClick={() => onUpdateQty(item.id, 1)} className="px-3 py-1 border rounded"> <Plus size={14} /> </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t pt-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Subtotal</p>
                  <p className="text-2xl font-bold">${subtotal.toFixed(2)}</p>
                </div>
                <div>
                  <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg shadow-lg">Proceed to Checkout</button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="fixed right-0 top-0 w-96 h-full bg-white shadow-2xl p-6 overflow-y-auto z-50"
    >
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Cart is empty.</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} className="flex gap-4 mb-6">

              <img
                src={item.image}
                className="w-16 h-16 rounded-xl object-cover"
              />

              <div className="flex-1">
                <div className="flex justify-between">
                  <h4 className="font-semibold">{item.name}</h4>
                  <button onClick={() => onRemove(item.id)}>
                    <X size={16} />
                  </button>
                </div>

                <p className="text-indigo-600 font-bold">
                  ${item.price}
                </p>

                <div className="flex items-center gap-3 mt-2">
                  <button
                    onClick={() => onUpdateQty(item.id, -1)}
                    className="p-1 border rounded"
                  >
                    <Minus size={14} />
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => onUpdateQty(item.id, 1)}
                    className="p-1 border rounded"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="border-t pt-4 mt-6">
            <p className="font-bold text-lg">
              Total: ${subtotal.toFixed(2)}
            </p>
          </div>
        </>
      )}
    </motion.div>
  );
}
