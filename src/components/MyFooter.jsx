import { Col, Container, Row, Button } from "react-bootstrap";

const MyFooter = () => {
  return (
    <Container className=" mt-5">
    <Row className="justify-content-center">
      <Col xs={12} md={6}>
       
        <Row className="text-start">
          <Col className="mb-2">
            <i className="bi bi-facebook footer-icon me-2"></i>
            <i className="bi bi-instagram footer-icon me-2"></i>
            <i className="bi bi-twitter footer-icon me-2"></i>
            <i className="bi bi-youtube footer-icon"></i>
          </Col>
        </Row>

    
        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4">
          <Col>
            <div className="footer-links">
              <p>
                <a href="#home" alt="footer link">
                  Audio and Subtitles
                </a>
              </p>
              <p>
                <a href="#home" alt="footer link">
                  Media Center
                </a>
              </p>
              <p>
                <a href="#home" alt="footer link">
                  Privacy
                </a>
              </p>
              <p>
                <a href="#home" alt="footer link">
                  Contact us
                </a>
              </p>
            </div>
          </Col>
          <Col>
            <div className="footer-links">
              <p>
                <a href="#home" alt="footer link">
                  Audio Description
                </a>
              </p>
              <p>
                <a href="#home" alt="footer link">
                  Investor Relations
                </a>
              </p>
              <p>
                <a href="#home" alt="footer link">
                  Legal Notices
                </a>
              </p>
            </div>
          </Col>
          <Col>
            <div className="footer-links">
              <p>
                <a href="#home" alt="footer link">
                  Help Center
                </a>
              </p>
              <p>
                <a href="#home" alt="footer link">
                  Jobs
                </a>
              </p>
              <p>
                <a href="#home" alt="footer link">
                  Cookie Preferences
                </a>
              </p>
            </div>
          </Col>
          <Col>
            <div className="footer-links">
              <p>
                <a href="#home" alt="footer link">
                  Gift Cards
                </a>
              </p>
              <p>
                <a href="#home" alt="footer link">
                  Terms of Use
                </a>
              </p>
              <p>
                <a href="#home" alt="footer link">
                  Corporate Information
                </a>
              </p>
            </div>
          </Col>
        </Row>

        
        <Row>
          <Col className="mb-2">
            <Button
              variant="secondary"
              size="sm"
              className="footer-button rounded-0 mt-3"
            >
              Service Code
            </Button>
          </Col>
        </Row>

        
        <Row>
          <Col className="mb-2 mt-2 copyright">
            © 1997-{new Date().getFullYear()} Netflix, Inc.
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
  );
};

export default MyFooter;
