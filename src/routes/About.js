import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About() {
    return (
        <section>
            <Container className="about-section" id="about">
                <Container className="about-content">
                    <Row>
                        <Col md={7} className="about-header">
                            <h1 className="heading">About Me</h1>
                            <p>I like to code and am learning to code still.</p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    )
}

export default About;