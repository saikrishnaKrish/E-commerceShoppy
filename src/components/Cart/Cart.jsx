import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import {useHistory  } from 'react-router-dom';
function Cart() {
  const {cart} =useContext(CartContext)
  const history  = useHistory (); 
  let cartList = cart ? Object.values(cart) : [];
  // console.log("cartList", cartList);
  console.log(cart);

  function getDiscountedPrice(amoumt, percentage) {
    let discountedAmount = (amoumt * percentage) / 100;
    let finalprice = amoumt - discountedAmount;

    return finalprice;
  }
  function RedirectToPage(page){
    let url=''
    if(page.toLowerCase()=='home'){
      url='/';
    }
    setTimeout(()=>{

      history.push('/')
    },4000)
  }

  //calcylating the final price for each product and storing in final price
  cartList = cartList.map(
    (prod) =>
      (prod = {
        ...prod,
        finalPrice:
          getDiscountedPrice(prod.price.value, prod.price.discount) *
          prod.quantity.toFixed(2)
      })
  );
  // getting the final price and stoing in billAmt
  let billAmt = cartList.map((ele) => ele.finalPrice);
  billAmt = billAmt.reduce((i, c) => i + c, 0); //calculating the final bill
  // billAmt=billAmt.toFixed(2);
  // console.log("billedAmt", billAmt);

  return (
    <>
     {cartList.length > 0  ? <> <table>
        <thead>
          <tr>
            <th> Name</th>
            <th> Quantity</th>
            <th> Price Per unit</th>
            <th> Discount</th>
          </tr>
        </thead>
        <tbody>
          {cartList.map((ele, i) => {
            return (
              <tr key={i}>
                {/* <td key={ele.id}></td> */}
                <td>{ele.title}</td>
                <td>{ele.quantity}</td>
                <td>{ele.price.value.toFixed(2)}</td>
                <td>{ele.finalPrice.toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      
      <ul>
        <hr />
        Total Price: {billAmt.toFixed(2)}
        <hr/>
        Thanks for shopping
      </ul>
      </> :<><i>
          Your Shoppigng cart is empty!!!
      </i>
      <br/>
      <br/>
       You will be Redirected to Home Page
      {RedirectToPage("Home")}
      </>


      }
      
    </>
  );
}

export default Cart;
