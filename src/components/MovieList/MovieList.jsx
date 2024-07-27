import { Link, useLocation } from "react-router-dom";
import s from "../MovieList/MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <div className={s.movieListContainer}>
      <ul className={s.movieList}>
        {movies.map((movie) => (
          <li key={movie.id} className={s.movieItem}>
            <Link
              to={`/movies/${movie.id}`}
              state={location}
              className={s.movieLink}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className={s.movieImage}
              />
              <h2 className={s.movieTitle}>{movie.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
