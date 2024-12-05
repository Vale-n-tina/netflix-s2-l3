import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
const Details = () => {
  const params = useParams();
const navigate=useNavigate()
  const [film, setFilm] = useState(null);

  const getFilm = () => {
    fetch("http://www.omdbapi.com/?apikey=76052b01&i=" + params.filmId)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore nel recupero del film ");
        }
      })
      .then((filmtrovato) => {
        console.log("film", filmtrovato);
        setFilm(filmtrovato);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getFilm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (

    
        film && (
             <Container>
      <Row className=" justify-content-center">
        <Col sm={12} md={6} lg={4} xl={4} className=" my-5">
          <Card>
            <Card.Img variant="top" src={film.Poster} />
            <Card.Body>
              <Card.Title>{film.Title}</Card.Title>
              <Card.Text>
                {film.Plot}
              </Card.Text>
              <Button onClick={()=>{navigate("/") }}  variant="primary">Torna in home</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
        )
    
   
  );
};
export default Details;
