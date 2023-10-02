//This is not a component,
//it just a javascript file for holding a context

import { createContext } from "react"
    const CartContext = createContext({
        cart:{},
        incrementQty:()=>{},
        dectementQty:()=>{}
    })

export default CartContext;