import React from "react";
import "./style.css"
import { Container, Row, Col } from "react-grid-system";
import { FiShoppingBag } from "react-icons/fi";

function Header() {
    return (
        <>
            <nav>
                <Container>
                    <Row>
                        <Col md={10}>
                            <h2 className="title-nav">Mandala Shop's</h2>    
                        </Col>
                        <Col md={2}>
                            <div className="bag-container">
                                <span className="bag-itens">0</span>
                                <FiShoppingBag size={24} color="#fff" />   
                            </div>
                        </Col>
                    </Row>
                </Container>
            </nav>
        </>
    );
}

export default Header;