import { useEffect,useState } from "react";

function useWindowSize(){
    const [windowSize,setWindowSize]=useState({
        width:window.innerWidth,
        height:window.innerHeight
    })
console.log('windoe')

    function calSize(){
        setWindowSize({
            width:window.innerWidth,
            height:window.innerHeight
        });
    }

    useEffect(()=>{
        window.addEventListener('resize',calSize)
    },[])

    return windowSize;
}

export default useWindowSize;