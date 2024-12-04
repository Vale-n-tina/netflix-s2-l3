import { useState } from "react";
import { Col, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const OneFilm = (props) => {
  const [modale, setModal] = useState(false);
  return (
    <>
      <Col
        key={props.film.imdbID}
        sm={12}
        md={6}
        lg={3}
        xl={2}
        onClick={() => {
          setModal(true);
        }}
      >
        <Link to={"/details/" + props.film.imdbID }>
          <img
            className="img-fluid"
            src={props.film.Poster}
            alt={props.film.Title}
          />
        </Link>
      </Col>

      <Modal
        show={modale}
        onHide={() => {
          setModal(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.film.Title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <img src={props.film.Poster} alt={props.film.Title} />{" "}
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};
export default OneFilm;
