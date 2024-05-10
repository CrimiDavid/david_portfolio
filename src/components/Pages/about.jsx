import React from 'react';
import { SiGithub, SiLinkedin, SiUpwork } from 'react-icons/si';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './about.css'; // Ensure this path is correct

function About() {
    return (
        <Container fluid className="p-0 min-vh-100 d-flex">
            <Row className="flex-grow-1 w-100">
                <Col md={6} className="about-section d-flex flex-column align-items-center justify-content-start p-3">
                    <h1>About Me</h1>
                    <p>Knowledgeable Full Stack Developer brings superior front-end and back-end design to promote organization-specific website presence.
                        Thorough comprehension of complex HTML, CSS, and JavaScript programming languages to generate custom webpage design.
                        Extensive collaboration with front-end to ascertain company expectations and oversee site creation, from initial planning through rollout and support.
                        Detail-oriented approach to maintaining website responsiveness, effectiveness, and security.</p>
                    <div className="icons-container d-flex align-items-center justify-content-start gap-2 mt-2">
                        <a href="https://github.com/"><SiGithub size={40}/></a>
                        <a href="https://linkedin.com"><SiLinkedin size={40}/></a>
                        <a href="https://upwork.com"><SiUpwork size={40}/></a>
                        <Button variant="primary" className="resume-button">Resume</Button>
                    </div>
                </Col>
                <Col md={6} className="skills-section d-flex flex-column align-items-center justify-content-start p-3">
                    <h1>Skills</h1>
                    {/* Skills content will go here */}
                </Col>
            </Row>
        </Container>
    );
}

export default About;
