import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    try {
      const getData = async () => {
        const data = await fetchTrendingMovies();
        setMovies(data.results);
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <h1>Trending Movies</h1>
      <MovieList movies={movies} />
    </>
  );
};

export default HomePage;
