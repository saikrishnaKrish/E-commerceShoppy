import { omit } from 'lodash';

function cartReducers(state = { items: {} }, action) {
    // console.log('from thunk cart reducer', state)
    switch (action.type) {
        case 'ADD_TO_CART': {
            const product = action.payload;
            if (state.items[product.id]) {
                return {
                    ...state,
                    items: {
                        ...state.items,
                        [product.id]: {
                            ...state.items[product.id],
                            quantity: state.items[product.id].quantity + 1
                        }
                    }
                }
            }
            else {
                return {
                    ...state,
                    items: {
                        ...state.items,
                        [product.id]: {
                            ...product,
                            quantity: 1
                        }
                    }
                }
            }


        }
        case 'REMOVE_FROM_CART': {
            const product = action.payload;
            if (state.items[product.id].quantity < 2) {
                return {
                    ...state,
                    items: omit(state.items, [product.id])
                };
            }
            else {
                console.log("else block")
                return {
                    ...state,
                    items: {
                        ...state.items,
                        [product.id]: {
                            ...state.items[product.id],
                            quantity: state.items[product.id].quantity - 1
                        }
                    }
                }
            }
        }
        default: return state;
    }
}

export default cartReducers;