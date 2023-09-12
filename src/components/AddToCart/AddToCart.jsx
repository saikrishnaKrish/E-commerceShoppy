function AddToCart({ incrementQty, decrementQty, product, cart }) {
  function increment() {
    incrementQty(product);
  }
  function decrement() {
    decrementQty(product);
  }
  // cart[product.id] ? cart[product.id].quantity : 0;
  const quantity = cart[product.id] ? cart[product.id].quantity : 0;
  // console.log(cart);

  return (
    <div>
      {quantity > 0 ? (
        <>
          <button onClick={increment}>+</button>
          <span>{quantity}</span>
          <button onClick={decrement}>-</button>
        </>
      ) : (
        <button onClick={increment}> Add to Cart </button>
      )}
    </div>
  );
}

export default AddToCart;
