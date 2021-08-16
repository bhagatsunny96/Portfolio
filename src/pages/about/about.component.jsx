import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Profile from '../../assets/img/profile/profile.jpg';
import "./about.style.css";
import Button from 'react-bootstrap/Button';
const About = () => {
    return(
        <div id ='about'>
              <div className="about">
                <h1 className="pt-3 text-center font-details pb-3">About Me</h1>
                <Container>
                    <Row  className="pt-3 pb-5 align-items-center">
                        <Col xs={12} md={6}>
                            <Row className="justify-content-center mb-2 mr-2 ">
                            <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
                            </Row>
                        </Col>
                        <Col xs={12} md={6}>
                            <Row className=" align-items-start p-2 my-details rounded">
                            Hi there! I am <strong>&nbsp;Sunny Bhagat</strong>
                <br />A passionate programmer, born and brought up in India. I am a Full Stack Web Developer with React.js, Django, PHP, CSS as my tech stack.
                <br />
                I am pursuing my Engineering with specialization in 'Information Technology'.
                <br />
                Working with the any firm, my goal is always driven towards providing amazing experience with the best level of quality and service to them.
                <br />
                I am Currently looking for internship roles in Software Development fields.
                <br />I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                <br /> <br />
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center flex-wrap">
                                    <div>
                                        <a href = "#contact">
                                        <Button className="m-2" variant="outline-warning">Let's Talk </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://drive.google.com/file/d/12yDAbNhbQmuxMY8eqB5RYw8OurKaObbE/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-success">
                                                Resume
                                            </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://github.com/bhagatsunny96" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-dark">
                                                GitHub
                                            </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://www.linkedin.com/in/sunny-bhagat-833380182/" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-info">
                                                LinkedIn
                                            </Button>
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default About
