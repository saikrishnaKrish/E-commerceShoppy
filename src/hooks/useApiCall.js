import {useState,useEffect} from 'react';

function useApiCall(type,url,payload){
const initialState={
    data:[],
    isLoading:true,
    error:false
};

    const [state,setState] =useState(initialState)

    useEffect(()=>{
        async function fetchData(){
            try{
                const res=await fetch(url,{
                    method: type,
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: payload ? JSON.stringify(payload) : undefined,
                })

                if(!res.ok){
                    throw new Error('unable to make api call')
                }

                const data=await res.json();
                setState({
                    ...state,data,isLoading:false
                })

                
            }
            catch(e){
                console.log('error occured',e);

                setState({...state,isLoading:false,error:e})
            }
        }
    
        fetchData()
    },[url])


    return state
}
// setState(...state,...data:


export default useApiCall;