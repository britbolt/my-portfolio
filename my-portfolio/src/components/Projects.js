import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import watchlist from "../Assets/watchlist-screenshot.png";


function Projects(){
    return (

<section>
<Container className="home-section" id="home">
    <Container className="home-content">
    <h1 className="heading" style={{ justifyContent: "center", paddingBottom: "10px" }}>My Recent Work</h1>
    <h3>Here are a few projects I've worked on recently.</h3>
        <Row stlye={{ paddingTop:"30px" }}>
            <Col md={7} className="home-header">  
                    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={watchlist} />
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
   