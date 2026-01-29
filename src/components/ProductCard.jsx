import React from "react";
import "./ProductCard.css";

function ProductCard({ product }) {
  const isPremium = product.price > 100;

  return (
    <div className={`card ${!product.inStock ? "out-of-stock" : ""}`}>

      {product.image && (
        <img src={product.image} alt={product.name} />
      )}

      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>

      
      {product.isFeatured && <span className="featured">Featured</span>}

   
      {!product.inStock && <span className="badge">Out of Stock</span>}

      {isPremium && <p className="premium">Premium Product</p>}
      
    </div>
  );
}

export default ProductCard;
