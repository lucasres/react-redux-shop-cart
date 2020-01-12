import React from "react";
import Header from "../Header";
import { Container } from "react-grid-system";

function Layout(props) {
    return (
        <>
            <Header />
            <Container>
                {props.children}
            </Container>
        </>
    );
}

export default Layout;