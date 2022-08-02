import React from "react";
import { Form, Button, Container } from "react-bootstrap";

function Contact() {
    return (
        <Container style={{ width:"380px" }}>
        <Form>
            <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="name" placeholder="Enter name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control type="text" placeholder="Your message here" />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </Container>
    )
}

export default Contact;