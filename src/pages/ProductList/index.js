import React from "react";
import Layout from "../../components/Layout";
import { Row, Col } from "react-grid-system";
import InputSelect from "../../components/InputSelect";

function ProductList() {
    function handleFilter(value) {
        console.log(value);
    }

    return (
        <Layout>
            <Row className="mg-tp-12">
                <Col className="fn-serif" md={10}>
                    <h2 className="title-page">Produtos</h2>
                </Col>
                <Col md={2}>
                    <InputSelect handleSelect={handleFilter}>
                        <option>Selecione um filtro</option>
                        <option value="1">Menor preço</option>
                        <option value="2">Maior preço</option>
                    </InputSelect>
                </Col>
            </Row>
            <Row>
                <Col className="no-pd-mg">
                    <hr className="separetor"></hr>
                </Col>
            </Row>
        </Layout>
    );
}

export default ProductList;