const INITIAL_STATE_CART = {
    data:[],
}

function handleAddCart(state,payload) {
    return {
        ...state,
        data:[
            ...state.data,
            payload
        ]
    }
}

function cartReduce(state = INITIAL_STATE_CART, action) {
    switch (action.type) {
        case 'ADD_CART':
            return handleAddCart(state,action.payload);
        default:
            return state;
    }
}

export default cartReduce;