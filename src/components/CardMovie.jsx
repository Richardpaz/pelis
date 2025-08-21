import { FcRating } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import "../styles/CardMovie.css";
export function CardMovie({ e }) {


  return (
    <NavLink to={`/movie/${e.id}`}>
      <div className="movie" >
        <div className="movie-poster">
          <img
            src={`https://image.tmdb.org/t/p/w500${e.poster_path}`}
            alt={e.title}
          />
        </div>
        <div className="movie-info">
          <div>
            <p>{e.title}</p>
          </div>
          <div>
            <span className="info-average">
              <FcRating />
              {Math.round(e.vote_average)}
            </span>
          </div>
        </div>
      </div>
    </NavLink>
  );
}
