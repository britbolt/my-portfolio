import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
    return (
        <section>
            <Container className="home-section" id="home">
                <Container className="home-content">
                    <Row>
                        <Col md={7} className="home-header">
                            <h1 className="heading">
                                Welcome!</h1>
                                </Col>
                                 </Row> 
                </Container>
            </Container>
        </section>
    );
}

export default Home;