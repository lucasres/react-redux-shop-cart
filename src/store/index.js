import { createStore } from "redux";


const INITIAL_STATE = {
    cart:[]
};

function cart(state = INITIAL_STATE, action){
    switch (action.type) {
        case 'ADD_PRODCUT_CART':
            return {...state,cart:[...state.cart,action.payload]};
        case 'REMOVE_PRODUCT_CART':

            break;
        default:
            return state;
    }
}

const store = createStore(cart);

export default store;