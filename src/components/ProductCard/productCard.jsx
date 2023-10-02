import AddToCart from "../AddToCart/AddToCart";
import Rating from "../Rating/Rating";
import ReduxAddToCart from "../ReduxAddToCart/ReduxAddToCart";
import "./productCard.css";
import React from "react";

function ProductCard({product}) {
  console.log('product card rendered')
  return (
    <div className="card">
      <h2>{product.title}</h2>
      <h4>{product.price.value}</h4>
      <Rating rating={product.rating.value} maxRating={5}/>
      {/* <AddToCart product={product}
      /> */}
      <ReduxAddToCart product={product}/>
    </div>
  );
}
export default React.memo(ProductCard);
