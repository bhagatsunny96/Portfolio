import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const ContactForm = () => {
    return (
      <div id="contact">
        <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
        <div className="contactl">
          <Row>
            <Col className="d-flex justify-content-center flex-wrap">
              <div className="m-2">
                <a href="mailto:bhagatsunny6@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline-danger" title="bhagatsunny96@gmail.com">
                    <i className="fas fa-envelope-square"></i> Email Me
                  </Button>
                </a>
              </div>
              <div className="m-2">
                <a href="https://www.linkedin.com/in/sunny-bhagat-833380182/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline-warning" title="Visit my LinkenIn">
                    <i className="fab fa-linkedin"></i> LinkedIn
                  </Button>
                </a>
              </div>
              
              <div className="m-2">
                <a href="https://github.com/bhagatsunny96" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline-dark" title="My other projects">
                    <i className="fab fa-github-square"></i> GitHub
                  </Button>
                </a>
              </div>
              <div className="m-2">
                <a href="https://twitter.com/bhagatsunny96" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline-success" title="Tweets are welcomed!">
                    <i className="fab fa-twitter"></i> Twitter
                  </Button>
                </a>
              </div>
              <div className="m-2">
                <a href="https://www.facebook.com/sunny.rockzz.9465" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline-info" title="Say hello on FB">
                    <i className="fab fa-facebook-f"></i> FaceBook
                  </Button>
                </a>
              </div>
            </Col>
          </Row>
       </div>
      </div>
    );
  };
  
  export default ContactForm;