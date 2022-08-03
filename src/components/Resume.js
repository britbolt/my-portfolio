import React from "react";
import { Container } from "react-bootstrap";

function Resume() {
    return(
<section>
            <Container className="resume" id="resume">
                <Container className="resume-content">
                  <h1>My Resume</h1>  
                  <h3 className="justify-content-start">Previous Work Experience</h3>
                    
                </Container>
            </Container>
        </section>
    );
}

export default Resume;