import {Switch,Route} from "react-router-dom";
import { useState } from "react";
import "./styles.css";
import cartContext from "./context/CartContext";

//components
import Products from "./components/Products/Products";
import ReduxCart from "./components/Cart/ReducxCart";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import NotFound from "./components/NotFound/NotFound";
// import Cart from "./components/Cart/Cart";



export default function App() {

  
  const [cart, setCart] = useState({});

  function incrementQty(product) {
    const newCart = { ...cart };
    if (!newCart[product.id]) {
      newCart[product.id] = {
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: 0
      };
    }
    // console.log(product)
    // console.log('hi',newCart[product.id].quantity);
    newCart[product.id].quantity += 1;
    setCart(newCart);
  }
  function decrementQty(product) {
    const newCart = { ...cart };
    if (!newCart[product.id]) return;
    newCart[product.id].quantity -= 1;
    if (newCart[product.id].quantity <= 0) {
      delete newCart[product.id];
    }
    setCart(newCart);
  }
  return (
      <div className="App">
        <h1 style={{backgroundColor:'Orange',color:'white'}}><i><b>Sravani Mart</b></i></h1>
        <Switch>
          <Route path='/' exact component={Products}/>
          <Route path='/product/:id' exact component={ProductDetails}/>
          <Route path="/cart" component={ReduxCart}/> 
            <Route path='*' component={NotFound}/>
        </Switch>
      </div>
   
   
  );
}
