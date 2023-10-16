import React from 'react'
import { useEffect,useState,Suspense } from 'react';
import useApiCall from '../../hooks/useApiCall';


const LandingPage = () => {
    const [producsList,setProductsList]=useState([]);
    const {data,isLoading,error}=useApiCall();

    // console.log(data)
   const getProductsList=()=>{
        fetch('https://dummyjson.com/products')
        .then((res)=>res.json())
        .then((res)=>setProductsList(res.products))

    }

    useEffect(()=>{
        getProductsList();
    },[])


    useEffect(() => {
        document.title = 'New Title';
      
        return () => {
          document.title = 'Default Title'; // Reset the title when the component unmounts
        };
      }, []);

      
    function displayList(){
        console.log('called')
       return  producsList.map((item)=>(<li style={{display:"flex",justifyContent:"space-around"}}>
                <ol>{item.price}</ol>
                <ol>{item.title}</ol>
            </li>))
            }



  return (
    <div>
        <label>LandingPage</label>
      
        <Suspense fallback={<h2>🌀 Loading...</h2>}>
        <div >{producsList.length > 0 && displayList()}</div>
        </Suspense>
       
    </div>
    
  )
}

export default LandingPage


