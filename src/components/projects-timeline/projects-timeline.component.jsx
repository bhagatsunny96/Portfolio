import React from 'react';
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import Accordion from 'react-bootstrap/Accordion'
import Card from "react-bootstrap/Card";
import "./projects-timeline.styles.css";
import Image from 'react-bootstrap/Image';
//Projects
import L_EcommerceUsingDjango from "../../assets/img/projects/ShopStalk.jpeg";
//Skills
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP from "../../assets/img/skills/bootstrap-4.svg";
import L_DJANGO from "../../assets/img/skills/django.svg";
import L_HEROKU from "../../assets/img/skills/heroku.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_SQLITE from "../../assets/img/skills/sqlite.svg";

const ProjectTimeline = () => {
    return(

        <div id ="projects">
            <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
            <Timeline>
                <Events>
                    <ImageEvent
                        date="12/01/2021"
                        className="text-center"
                        text="E-Commerce Website using Django"
                        src={L_EcommerceUsingDjango}
                        alt="E-Commerce Website using Django"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                        <div>
                            <Accordion>
                            <Card>
                                <Accordion.Toggle
                                as={Card.Header}
                                eventKey="0"
                                className="p-2 text-center accordian-main"
                                >
                                PROJECT DETAILS
                                </Accordion.Toggle>

                                <Accordion.Collapse eventKey="0" className="text-left">
                                <Card.Body>
                                    <strong>Description:</strong> This is my first Ecommerce
                                    website built using Django.
                                    <hr />
                                    <strong>Features:</strong>
                                    <ul className="list-styles pt-1">
                                    <li>Buy Products</li>
                                    <li>User Registration Login </li>
                                    <li>Cart Feature</li>
                                    <li>Integrated Payment Gateway</li>
                                    <li>
                                        Hosted using Heroku under shopstalk.heokuapp.com
                                    </li>
                                    <li>Fully funtional Administration panel</li>
                                    </ul>
                                    <hr />
                                    <strong>Tech used:</strong>
                                    <ul>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_HTML5}
                                            alt="HTML 5"
                                            rounded
                                            className="image-style m-1"
                                        ></Image>{" "}
                                        HTML5
                                        </span>
                                    </li>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_CSS3}
                                            alt="CSS 3"
                                            rounded
                                            className="image-style m-1"
                                        ></Image>{" "}
                                        CSS3
                                        </span>
                                    </li>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_BOOTSTRAP}
                                            alt="Bootstrap 4"
                                            rounded
                                            className="image-style m-1"
                                        ></Image>{" "}
                                        Bootstrap 4
                                        </span>
                                    </li>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_JAVASCRIPT}
                                            alt="JavaScript"
                                            rounded
                                            className="image-style m-1"
                                        ></Image>{" "}
                                        JavaScript
                                        </span>
                                    </li>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_DJANGO}
                                            alt="Django"
                                            rounded
                                            className="image-style m-1"
                                        ></Image>{" "}
                                        Django
                                        </span>
                                    </li>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_SQLITE}
                                            alt="SQLITE"
                                            rounded
                                            className="image-style1 m-1"
                                        ></Image>{" "}
                                        DB sqlite
                                        </span>
                                    </li>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_HEROKU}
                                            alt="Heroku"
                                            rounded
                                            className="image-style m-1"
                                        ></Image>{" "}
                                        Heroku
                                        </span>
                                    </li>
                                    </ul>
                                    <hr />
                                    <em>
                                    <strong>View Demo Site:</strong>
                                    <br />
                                    <br />
                                    If you are reading this, that means I have updated my
                                    Ecommerce website to recent one.
                                    <br />
                                    </em>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            </Accordion>
                        </div>
                        <div className="d-flex justify-content-between flex-nowrap text-center">
                            <UrlButton href="https://shopstalk.herokuapp.com" target="_blank">
                            View SITE
                            </UrlButton>
                        </div>
                        </div>
                    </ImageEvent>
                </Events>
            </Timeline>
        </div>
    );
}

export default ProjectTimeline;