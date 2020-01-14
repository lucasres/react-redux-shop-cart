import React from "react";
import "./style.css";
//import { url } from "inspector";
import { useDispatch } from "react-redux";

function ProductItem({product}) {
    const dispatch = useDispatch();

    function handleInputCar(product) {
        dispatch({
            type: 'ADD_CART',
            payload:{
                product
            }
        })
    }

    return (
        <div className="product-container">
            <div className="product-photo" style={{backgroundImage:`url(${product.photo})`}}></div>
            <div className="txt-container">
                <span>{product.name}</span>
            </div>
            <div className="txt-container">
                <span>R$ {product.value}</span>
            </div>
            <a className="btn-add" href="#" onClick={handleInputCar(product)}>Adicionar</a>
        </div>
    );
}

export default ProductItem;