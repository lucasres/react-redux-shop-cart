const INITIAL_STATE_CART = {
    total:0,
    data:[],
}

function handleAddCart(state,payload) {
    let data = state.data;
    data.push(payload);
    return {
        ...state,
        total:data.length,
        data: data
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