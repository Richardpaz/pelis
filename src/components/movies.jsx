import { useEffect, useState } from "react";
import { CardMovie } from "./CardMovie.jsx";
import { ButtonPage } from "./ButtonPage.jsx";
import "../styles/movies.css";
export function Movies() {
  const [datos, setDatos] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const APIKEY = import.meta.env.VITE_API_KEY_THEMOVIE;
  useEffect(() => {
    const getMovies = async () => {
      const result = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=" +
          APIKEY +
          "&include_adult=false&language=es-ES&page=" +
          page
      );
      const data = await result.json();
      console.log(data.results);
      setDatos(data.results);
      setPage(data.page);
      setLoading(false);
    };
    getMovies();
     window.scrollTo({ top: 0, behavior: "smooth" });

  }, [page]);
  return loading ? (
    <h1 style={{textAlign:"center"}}>loading</h1>
  ) : (
    <div className="movie-container">
      <div className="movies-container">
        {datos?.map((e) => {
          return <CardMovie e={e} key={e.id}/>;
        })}
      </div>
      <div className="buttons-container">
        <ButtonPage
          texto="Anterior"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        />
        <h3>{page}</h3>
        <ButtonPage
          texto="Siguiente"
          disabled={datos?.length < 20}
          onClick={() => setPage(page + 1)}
        />
      </div>
    </div>
  );
}
