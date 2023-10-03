import { useDispatch,useSelector  } from "react-redux";
// useDispatch--to provide the dispatch method

function ReduxAddToCart({product}) {
  // const quantity = cart[product.id] ? cart[product.id].quantity : 0;
    let dispatch= useDispatch();
    // let cart = useSelector((state)=>{
    //   return state.items
    // })

    //can be re-written as 
    let quantity =useSelector((state)=>{
        return state.cart.items[product.id]?.quantity || 0;
    })

  // console.log('add to cart called')
  function increment() {
    // console.log(product)
    // dispatch({type:"",payload})
    dispatch({type:"ADD_TO_CART",payload:product})
    // incrementQty(product);

    
  }
  function decrement() {
    // decrementQty(product);
    console.log('decrement page')
    dispatch({type:"REMOVE_FROM_CART",payload:product})
  }
  // cart[product.id] ? cart[product.id].quantity : 0;
  
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
        <button onClick={increment} > Add to Cart </button>
      )}
    </div>
  );
}

export default ReduxAddToCart;
