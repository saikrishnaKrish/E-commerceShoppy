function productReducers(state={products:[]},action){
    console.log(action.payload);
    
    switch(action.type){
        case 'LOAD_PRODUCTS' : {
            console.log(action)
            const data=action.payload;

            return {
                ...state,
                    products:data
            }
        }
        default: return state;
    }
}

export default productReducers;