import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About() {
    return (
        <section className="py-5" id="about">

            <Container className="about-section">
             
                    <Row className="justify-content-md-center">
                        <Col className="about-header">
                            <h1 className="heading">About Me</h1>
                            <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex
          condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna
          mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum.
          Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique
          justo vel turpis sollicitudin, et tristique velit convallis. In hac habitasse platea
          dictumst. Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl nibh.
          Curabitur imperdiet ultricies mollis. In hac habitasse platea dictumst.
        </p>
                        </Col>
                    </Row>
                
            </Container>
        </section>
    )
}

export default About;