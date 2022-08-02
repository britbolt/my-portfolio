import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";


function Projects(){
    return (

<section>
<Container className="home-section" id="home">
    <Container className="home-content">
        <Row>
            <Col md={7} className="home-header">
                <h1 className="heading">
                    Welcome!</h1>
                    
                    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="../Assets/watchlist-screenshot.png" />
      <Card.Body>
        <Card.Title>Watchlist</Card.Title>
        <Card.Text>
          Web app to help friends decide what to watch. Built with react.js, Chakra UI, and Bootstrap.
        </Card.Text>
        <Button variant="primary" href="https://github.com/thevcr/watchlist-app" target="_blank">Github</Button>
      </Card.Body>
    </Card>
                    </Col>
                     </Row> 
    </Container>
</Container>
</section>
);
    }

    export default Projects;
   