import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import watchlist from "../Assets/watchlist-screenshot.png";
import weather from "../Assets/weather-dash-screenshot.jpg";


function Projects(){
    return (

<section>
<Container className="projects-section" id="projects">
    <Container className="project-content">
    <h1 className="heading" style={{ justifyContent: "center", paddingBottom: "10px" }}>My Recent Work</h1>
    <h3>Here are a few projects I've worked on recently.</h3>
    <br/>
        <Row className="justify-content-md-center" stlye={{ paddingTop:"30px" }}>
            <Col className="project-header">  
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
      <Col className="project-header">  
                    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={weather} />
      <Card.Body>
        <Card.Title>Weather Dashboard</Card.Title>
        <Card.Text>
          Weather search web applicaiton to see current and future forecast by city. Built with bootstrap, jquery, and javascript.
        </Card.Text>
        <Button variant="primary" href="https://github.com/britbolt/weather-dashboard" target="_blank">Github</Button>
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
   