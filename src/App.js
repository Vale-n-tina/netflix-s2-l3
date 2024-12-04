import "./App.css";
import MyNavbar from "./components/MyNavbat";
import "bootstrap/dist/css/bootstrap.min.css";
import SecondNavbar from "./components/SecondNavbar";
import MyFirstMain from "./components/MyFirstMain";
import MyFooter from "./components/MyFooter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./components/Details";
import NotFound from "./components/NotFound";



function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{ backgroundColor: "#221f1f" }}>
        <header>
          <MyNavbar />
          <SecondNavbar />
        </header>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <MyFirstMain
                    url="http://www.omdbapi.com/?apikey=76052b01&s=spider man"
                    title="Trending Now"
                  />
                  <MyFirstMain
                    url="http://www.omdbapi.com/?apikey=76052b01&s=harry potter"
                    title="Watch it Again"
                  />
                  <MyFirstMain
                    url="http://www.omdbapi.com/?apikey=76052b01&s=barbie"
                    title="New Releases"
                  />
                </>
              }
            />
            <Route path="/details/:filmId" element={<Details />} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </main>
        <footer>
          <MyFooter />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
