import AddToCart from "../AddToCart/AddToCart";
import Rating from "../Rating/Rating";
import ReduxAddToCart from "../ReduxAddToCart/ReduxAddToCart";
import "./productCard.css";
import React from "react";
import {Link} from 'react-router-dom'

function ProductCard({product}) {
  console.log('product card rendered')
  return (
    <div className="card">
     
      <h2>
      <Link to={`/productDetails/${product.id}`}>{product.title}</Link>
       </h2>
      <h4 className="text-sm font-medium text-gray-900">{product.price.value}</h4>
      <Rating rating={product.rating.value} maxRating={5}/>
      <ReduxAddToCart product={product}/>
    </div>
  );
}
export default React.memo(ProductCard);
