import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ products }) {

  
  if (products.length === 0) {
    return <h3>No products available at the moment.</h3>;
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
