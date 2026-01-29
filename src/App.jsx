import React from "react";
import products from "./data/products";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Product Showcase</h1>
      <ProductList products={products} />
    </div>
  );
}

export default App;
