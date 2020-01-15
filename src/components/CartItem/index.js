import React from "react";
import { Row, Col } from "react-grid-system";
import "./style.css";

function CartItem({product}) {
    return (
        <Row>
            <Col md={2}>
                <div className="photo-item"
                        style={{backgroundImage:`url(${product.photo})`}}></div>
            </Col>
            <Col md={8}>
                <p>{product.name}</p>
                <p>R$ {product.value}</p>
            </Col>
            <Col md={2}>
                Remover
            </Col>
        </Row>
    );
}

export default CartItem;