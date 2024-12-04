import { Container, Dropdown, DropdownButton } from "react-bootstrap";

const SecondNavbar = function () {
  return (
    <Container fluid className="px-4">
    <div className="d-flex justify-content-between">
      <div className="d-flex">
        <h2 >TV Shows</h2>

        <DropdownButton
          variant="secondary"
          size="sm"
          id="dropdown-genre"
          title="Genres"
          className="ms-4 mt-1"
          style={{ backgroundColor: "#221f1f" }}
        >
          <Dropdown.Item href="#">Comedy</Dropdown.Item>
          <Dropdown.Item href="#">Drama</Dropdown.Item>
          <Dropdown.Item href="#">Thriller</Dropdown.Item>
        </DropdownButton>
      </div>

      <div>
        <i
          className="bi bi-grid icons"
          style={{ fontSize: "1.5rem", margin: "0 10px" }}
        ></i>
        <i
          className="bi bi-grid-3x3 icons"
          style={{ fontSize: "1.5rem", margin: "0 10px" }}
        ></i>
      </div>
    </div>
    </Container>
  );
};

export default SecondNavbar;
