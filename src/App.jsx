import { Movies } from "./components/movies.jsx";
import "./styles/App.css"
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
        <h1>hola mundo</h1>
      </div>
    </div>
  );
}
