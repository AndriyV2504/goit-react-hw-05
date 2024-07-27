import { useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { fetchMovieDetails } from "../../services/api";
import s from "../MovieDetailsPage/MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const params = useParams();
  console.log(params);
  const [movie, setMovies] = useState(null);
  const navigate = useNavigate(null);

  const location = useLocation();
  const goBackRef = useRef(location?.state || "/movies");

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 6000);
  }, [navigate]);

  useEffect(() => {
    fetchMovieDetails(params.movieId).then((data) => setMovies(data));
  }, [params.movieId]);

  if (!movie) return <h2>Loading...</h2>;

  return (
    <div className={s.movieDetails}>
      <Link to={goBackRef.current} className={s.goBackButton}>
        Go back to movies
      </Link>
      <div className={s.movieInfo}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className={s.moviePoster}
        />
        <div className={s.movieText}>
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <p>Release date: {movie.release_date}</p>
          <p>Rating: {movie.vote_average}</p>
        </div>
      </div>
      <div className={s.additionalInfo}>
        <NavLink to="cast" className={s.link}>
          MovieCast
        </NavLink>
        <NavLink to="reviews" className={s.link}>
          MovieReviews
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
