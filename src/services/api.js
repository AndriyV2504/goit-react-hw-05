import axios from "axios";

const fetchMovies = async (endpoint, params = {}) => {
  const Access_Token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NGRhOWNiZWVlNTI3YjU2NGI4YmQ2ZTI2NmQyN2E4NCIsIm5iZiI6MTcyMjAyMzAxMS4zNjA1NzYsInN1YiI6IjY2OWZmZmY2YWVlNjdjYmEzN2RkNTZkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mmBtIbU7XOOKScK_ZzUZioCEu_WIlH26DiZgzTIjano";
  const response = await axios.get(`https://api.themoviedb.org/3${endpoint}`, {
    headers: {
      Authorization: `Bearer ${Access_Token}`,
    },
    params: {
      ...params,
    },
  });
  return response.data;
};

export const fetchTrendingMovies = () => fetchMovies("/trending/movie/day");

export const fetchMovieDetails = (movieId) => fetchMovies(`/movie/${movieId}`);

export const fetchMovieCast = (movieId) =>
  fetchMovies(`/movie/${movieId}/credits`);
