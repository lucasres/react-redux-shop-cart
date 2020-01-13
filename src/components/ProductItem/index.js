import React from "react";
import "./style.css";
//import { url } from "inspector";


function ProductItem({product}) {
    console.log(product.photo);
    return (
        <div className="product-container">
            <div className="product-photo" style={{backgroundImage:`url(${product.photo})`}}></div>
            <div className="txt-container">
                <span>{product.name}</span>
            </div>
            <div className="txt-container">
                <span>R$ {product.value}</span>
            </div>
            <a className="btn-add">Adicionar</a>
        </div>
    );
}

export default ProductItem;