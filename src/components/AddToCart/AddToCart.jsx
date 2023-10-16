import { useContext } from "react";
import CartContext from "../../context/CartContext";

function AddToCart({product}) {

  
  const {incrementQty,decrementQty,cart} =useContext(CartContext);
  function increment() {
    incrementQty(product);
  }
  function decrement() {
    decrementQty(product);
  }
 
  const quantity = cart[product.id] ? cart[product.id].quantity : 0;
 

  return (
    <div>
      {quantity > 0 ? (
        <>
          <button onClick={increment}>+</button>
          <span>{quantity}</span>
          <button onClick={decrement}>-</button>
        </>
      ) : (
        <button onClick={increment} > Add to Cart </button>
      )}
    </div>
  );
}

export default (AddToCart);
