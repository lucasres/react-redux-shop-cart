import React from "react";
import "./style.css"
import { Container, Row, Col } from "react-grid-system";
import { FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
    const total_cart = useSelector(state => state.cart.total);

    return (
        <>
            <nav>
                <Container>
                    <Row>
                        <Col md={10}>
                            <h2 className="title-nav">Mandala Shop's</h2>    
                        </Col>
                        <Col md={2}>
                            <Link to="/cart">
                                <div className="bag-container">
                                    <span className="bag-itens">{total_cart}</span>
                                    <FiShoppingBag size={24} color="#fff" />   
                                </div>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </nav>
        </>
    );
}

export default Header;