import React from "react";
import Layout from "../../components/Layout";
import { useSelector } from "react-redux";
import { Row, Col } from "react-grid-system";
import CartItem from "../../components/CartItem";
import Separetor from "../../components/Separetor";

function CartList(){
    const products = useSelector(state => state.cart.data);
    const total = products.reduce((acc,cur) => acc+cur.value,0);
    console.log('====================================');
    console.log(products);
    console.log('====================================');
    
    return (
        <Layout>
            <Row className="mg-tp-12">
                <Col className="fn-serif">
                    <h2 className="title-page">Carrinho</h2>
                </Col>
            </Row>
            <Separetor />
            {products.map(product => (
                <CartItem key={product.id} product={product} />
            ))}
            <Separetor />
            <Row>
                <Col>
                    <p>Total: R$ {total}</p>
                </Col>
            </Row>
        </Layout>
    );
}

export default CartList;