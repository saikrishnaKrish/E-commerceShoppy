import AddToCart from "../AddToCart/AddToCart";
import "./productCard.css";
import React from "react";

function ProductCard({product}) {
  console.log('product card rendered')
  return (
    <div className="card">
      <h2>{product.title}</h2>
      <h4>{product.price.value}</h4>
      <AddToCart product={product}
      />
    </div>
  );
}
export default React.memo(ProductCard);
