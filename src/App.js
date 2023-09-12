import { useState } from "react";
import Products from "./components/Products/Products";
import "./styles.css";
import Cart from "./components/Cart/Cart";

export default function App() {
  //   let arr= [];
  //   console.log(arr);
  //   Array.prototype.doubleNum= function(z){
  //     return z*z;
  //   }
  //   console.log(arr.doubleNum(27))

  // function stringReverse(str){
  //   return str.split('').reverse().join('');
  // }
  // // let a=[]
  // console.log(stringReverse('strerr'))
  // // a.prototype.strrev=stringReverse()

  // // In JavaScript, you can add properties or methods
  // //to the prototype of constructor functions, but you cannot add
  // //properties or methods to instances of objects directly.
  // //In your code, `a` is an instance of an array, and you cannot directly
  // //add a prototype to it. Instead, you should work with constructor functions.

  // // If you want to add a `strrev` method to all arrays,
  // // you can do so by extending the `Array.prototype`. Here's how you can do it:

  // // ```javascript
  // // Array.prototype.strrev = function() {
  // //   return this.map(stringReverse); // Using the stringReverse
  // //function you defined earlier
  // // };

  // // let a = [ 'str1', 'str2', 'str3' ];
  // // console.log(a.strrev()); // This will reverse each string in the array
  // // ```

  // Array.prototype.strrev = function() {
  //   return this.map(stringReverse);
  //    // Using the stringReverse function
  //   // you defined earlier
  // };

  // let a = [ 'str1', 'str2', 'str3' ];
  // console.log(a.strrev()); // This will reverse each string in the array

  // function Dog(name,breed){
  //   this.name=name;
  //   this.breed=breed;
  // }
  // stringReverse.prototype.getDetails=function(){
  // console.log('name',this.name);
  // }

  // console.log(stringReverse('44'))

  // let d = new Dog('buddy','street dog')
  // // console.log(d.getDetails())

  // // In this code, we add the `strrev` method to `Array.prototype`,
  // // and it can then be called on any array object.

  // function DoubleNumber(){
  //   console.log(this.num2*this.num1)
  //   console.log(this,typeof typeof this.num)
  //   // return this.num*this.num
  // }

  // // console.log(DoubleNumber(14))
  // let aa={num2:88,num1:778};
  // // const person = {
  // //   firstName: "Alice",
  // //   lastName: "Johnson",
  // // };
  // let g=DoubleNumber.bind(aa)
  // // console.log(DoubleNumber.bind(person)())
  // console.log(g())

  //   function MultiplyNum(){
  //     console.log(this)
  //   }

  // const double=function(){console.log('this',this.x * this.x )};
  // MultiplyNum.prototype.double=function(inp){
  //   console.log(inp)
  //   console.log(this)
  //   // return this.x*this.x
  // };
  // MultiplyNum.prototype.triple=function(){return this.x* this.x * this.x};
  // // MultiplyNum.prototype.triple=function(x){return x*x*x};
  // let obj={x:23,y:223}
  // console.log(double.bind(obj)())

  // let m1=new MultiplyNum()
  // console.log(m1.double(77))
  // let x=MultiplyNum.bind(obj)
  // console.log(x())
  // console.log(MultiplyNum.call(88))
  // MultiplyNum.prototype.
  // callback is calling a function with params after the current flow of execution
  //   function callbckExample(callback){
  //   console.time()
  // let a=5,b=3;
  //     setTimeout(()=>{
  //       callback(a,b)
  //     },2000)
  //   console.timeEnd()

  //   }

  //   function callback(a,b){
  //     console.log(a*b);
  //   }
  // console.log(callbckExample(callback))
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
      <Cart cart={cart} />
      <Products
        incrementQty={incrementQty}
        decrementQty={decrementQty}
        cart={cart}
      />
    </div>
  );
}
