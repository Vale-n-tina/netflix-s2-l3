import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const MyNavbar = function () {
  const location=useLocation()
  console.log("questa",location.pathname)
 
  
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#221f1f" }}>
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ width: "100px", height: "55px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Link to="/"
             className={ location.pathname === '/' ? 'nav-link active fw-bold text-light ' : 'nav-link fw-bold' }> 
            <div>Home</div>
            </Link>
            <Nav.Link className="fw-bold nav-link" >
              TV Shows
            </Nav.Link>
            <Nav.Link className="fw-bold nav-link" >
              Movies
            </Nav.Link>
            <Nav.Link className="fw-bold nav-link" >
              Recently Added
            </Nav.Link>
            <Nav.Link className="fw-bold nav-link" >
              My List
            </Nav.Link>
          </Nav>
          <div className="d-flex align-items-center">
            <i className="bi bi-search icons"></i>
            <div id="kids" className="fw-bold">
              KIDS
            </div>
            <i className="bi bi-bell icons"></i>
            <i className="bi bi-person-circle icons"></i>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default MyNavbar;
