import { useEffect, useState } from "react";
import { Container, Row, Spinner, Alert } from "react-bootstrap";
import OneFilm from "./Onefilm";

const MyFirstMain = (props) => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  const getFilm = () => {
    fetch(props.url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("orrore");
        }
      })
      .then((arrayfilm) => {
        if (arrayfilm.Response === "False") {
          throw new Error("orrore");
        } else {
          setFilms(arrayfilm.Search);
          setLoading(false);
        }
      })

      .catch((err) => {
        console.log("errore", err);
        setLoading(false);
        setError(true);
      });
  };
  useEffect(() => {
    getFilm();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container fluid className=" mt-5">
      <Row className=" g-3">
        <h4 className=" text-start ">{props.title}</h4>

        {error && (
          <Alert variant="danger">RAZZO!🚀 Qualcosa è andato storto</Alert>
        )}

        {loading && (
          <Spinner animation="border" role="status" variant="light">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}

        {films.map((film) => {
          
          return <OneFilm key={film.imdbID} film={film} />;
        })}
      </Row>
    </Container>
  );
};
export default MyFirstMain;

//76052b01 http://www.omdbapi.com/?apikey=metti-qui-la-api-key&s=Star Wars
