import { Movies } from "./components/movies.jsx";
import "../src/styles/app.css";
import { Header } from "./components/header.jsx";
import { ButtonPage } from "./components/ButtonPage.jsx";
import { useEffect } from "react";
export function App() {
  useEffect(() => {

  }, [<Movies/>]);
  return (
    <div className="app">
      <Header />
      <div className="movie-list">
        <Movies />
      </div>
    </div>
  );
}
