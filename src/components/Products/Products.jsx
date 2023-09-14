import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/productCard";
import React from "react";
import {Link} from 'react-router-dom'
function Products() {
  const [prodLst, setProdList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log('products')
  useEffect(() => {
    setIsLoading(true);
    fetch("https://602fc537a1e9d20017af105e.mockapi.io/api/v1/products")
      .then((res) => res.json())
      .then((res) => {
        setProdList(res);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <>{isLoading && <div>Loading</div>}</>
      <Link to="/cart">View Cart </Link>
      {!isLoading &&
        prodLst.length &&
        prodLst.map((product, index) => {
          return (
            <ProductCard
              key={index}
              product={product}
            />
          );
        })}
    </>
  );
}

export default React.memo(Products);
