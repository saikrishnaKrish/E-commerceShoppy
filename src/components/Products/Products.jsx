import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/productCard";

function Products({ incrementQty, decrementQty, cart }) {
  const [prodLst, setProdList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
      <>{isLoading && <div> Loading</div>}</>
      {!isLoading &&
        prodLst.length &&
        prodLst.map((product, index) => {
          return (
            <ProductCard
              incrementQty={incrementQty}
              decrementQty={decrementQty}
              cart={cart}
              key={index}
              product={product}
            />
          );
        })}
    </>
  );
}

export default Products;
