import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/productCard";
import React from "react";
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux";
import Categories from '../Categories/Categories'
import useApi from "../../services/useApi";
// import BASE_URL from "../../services/BASE_URL";
import { useDispatch } from "react-redux";

function Products() {
  const [prodLst, setProdList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const items =useSelector((state)=>state.cart.items);
  const count = Object.values(items).length;  
  const {data,loading,error} =useApi(`https://602fc537a1e9d20017af105e.mockapi.io/api/v1/products`)
 
  const dispatch=useDispatch();
  
    useEffect(()=>{
      if(data){
        setIsLoading(loading);
        setProdList(data)
        dispatch({type:'LOAD_PRODUCTS',payload:data})
        console.log(data)
      }
    },[data])

  console.log(data)
  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch("https://602fc537a1e9d20017af105e.mockapi.io/api/v1/products")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setProdList(res);
  //       setIsLoading(false);
  //     });
  // }, []);

  return (
    <>
      <>{isLoading && <div>Loading</div>}</>
      <Link to="/cart">View Cart {" "}
      {count}
       </Link>
      <Categories/>
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
