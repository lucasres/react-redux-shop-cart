import React from "react";
import { Row, Col } from "react-grid-system";

function Separator() {
    return (
        <Row>
            <Col className="no-pd-mg">
                <hr className="separetor"></hr>
            </Col>
        </Row>
    );
}

export default Separator;