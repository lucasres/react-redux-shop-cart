const INITIAL_STATE_PRODUCT = {
    data:[
        {
            id:1,
            name:'Furadeira Still',
            photo: 'https://www.ilos.com.br/web/wp-content/uploads/Caixas_fig1.png',
            value:10.05,
        },
        {
            id:2,
            name:'TechPix',
            photo: 'https://www.ilos.com.br/web/wp-content/uploads/Caixas_fig1.png',
            value:15.05,
        },
        {
            id:3,
            name:'Margarina Delicia',
            photo: 'https://www.ilos.com.br/web/wp-content/uploads/Caixas_fig1.png',
            value:20.78,
        },
        {
            id:4,
            name:'Baygon',
            photo: 'https://www.ilos.com.br/web/wp-content/uploads/Caixas_fig1.png',
            value:19.70,
        },
        {
            id:5,
            name:'PC GAMER',
            photo: 'https://www.ilos.com.br/web/wp-content/uploads/Caixas_fig1.png',
            value:10.89,
        },
        {
            id:6,
            name:'POLISTATION',
            photo: 'https://www.ilos.com.br/web/wp-content/uploads/Caixas_fig1.png',
            value:100.05,
        },
    ]
};

function productReduce(state = INITIAL_STATE_PRODUCT, action){
    switch (action.type) {
        case 'ADD_PRODCUT':
            return {...state,product:[...state.product,action.payload]};
        case 'REMOVE_PRODUCT':

            break;
        default:
            return state;
    }
}

export default productReduce;