import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../../services/api";

const MovieDetailsPage = () => {
  const params = useParams();
  console.log(params);
  const [movie, setMovies] = useState(null);

  useEffect(() => {
    fetchMovieDetails(params.movieId).then((data) => setMovies(data));
  }, [params.movieId]);

  if (!movie) return <h2>Loading...</h2>;

  return (
    <div>
      <p>MovieDetailsPage #{params.movieId}</p>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <p>Release date: {movie.release_date}</p>
      <p>Rating: {movie.vote_average}</p>
    </div>
  );
};

export default MovieDetailsPage;
