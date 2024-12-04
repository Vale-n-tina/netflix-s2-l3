import { useParams } from "react-router-dom";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
const Details = () => {
  const params = useParams();

  const getFilm = () => {
    fetch("http://www.omdbapi.com/?apikey=76052b01&s=" + params.imdbID)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore nel recupero del film ");
        }
      })
      .then((film) => {
        console.log("film", film);
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
    <Container>
      <Row className=" justify-content-center">
        <Col sm={12} md={6} lg={4} xl={4} className=" my-5">
          <Card>
            <Card.Img variant="top" src="https://placecats.com/300/200" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Details;
