import { useEffect,useState } from "react";

function useWindowSize(){
    const [windowSize,setWindowSize]=useState({
        width:window.innerWidth,
        height:window.innerHeight
    })


    function calSize(){
        console.log('called function')
        setWindowSize({
            width:window.innerWidth,
            height:window.innerHeight
        });
    }

    useEffect(()=>{
        window.addEventListener('resize',calSize)
        return ()=>{
            console.log('function removed')
        }
    },[])

    return windowSize;
}

export default useWindowSize;