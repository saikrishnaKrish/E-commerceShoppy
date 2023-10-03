import { useState,useEffect } from "react";
import axios from "axios";

function useApi(endpoint,options={}){
    const [data,setData]=useState(null);
    const [loading,setLoading] =useState(true);
    const [error,setError]=useState(false);

   const fetchData=async()=>{
    try{
            const response = await axios(endpoint,options);
                setData(response.data);
                setLoading(false)
            // console.log('checks')
    }
    catch(error){   
        setError(error)
    }
    finally{
        setLoading(false)
    }
   }


    useEffect(()=>{
        fetchData()
    },[endpoint])

    return {data,loading,error};
}

export default useApi;