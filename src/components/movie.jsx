import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/movie.css";
export function Movie() {
  const id = useParams().id;
  const navigate = useNavigate();
  const [datos, setDatos] = useState(null);
  const [logo, setLogo] = useState(null);
  const TOKEN = import.meta.env.VITE_API_TOKEN_THEMOVIE;
  useEffect(() => {
    const getMovieById = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?language=es-ES`,
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + TOKEN,
            "Content-Type": "application/json;charset=utf-8",
          },
        }
      );
      const data = await res.json();
      setDatos(data);
    };

    const getMovieLogo = async () => {
      await fetch(`https://api.themoviedb.org/3/movie/${id}/images?`, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + TOKEN,
          "Content-Type": "application/json;charset=utf-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          const logos = data.logos.filter(
            (e) => e.iso_639_1 === "es" || e.iso_639_1 === "en"
          );
          console.log(logos);
          setLogo(`https://image.tmdb.org/t/p/w300${logos[0].file_path}`);
        });
    };
    getMovieById();
    getMovieLogo();
    console.log(datos);
  }, [setDatos, id, TOKEN]);
  return datos === null ? (
    <h1 style={{ textAlign: "center" }}>Cargando...</h1>
  ) : (
    <div className="movie-contenedor">
      <header
        className="movie-header"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280${datos.backdrop_path})`,
        }}
      >
        <div className="movie-header-contenedor">
          <div className="movie-header-top">
            <button style={{backgroundColor:"transparent",fontSize:"30px"}} onClick={() => navigate("/")}>Inicio</button>
          </div>
          <div className="movie-header-footer">
            <img
              src={logo}
              alt=""
              style={{ width: "300px", padding: "20px" }}
            />
            <h2 style={{ textAlign: "center" }}>{datos.title}</h2>
          </div>
        </div>
      </header>
      <div className="hero">
        <h1>{datos.id}</h1>
        <h1>{datos.title}</h1>
        <h1>{datos.overview}</h1>
        <img
          src={`https://image.tmdb.org/t/p/w700${datos.backdrop_path}`}
          alt=""
        />
      </div>
    </div>
  );
}
