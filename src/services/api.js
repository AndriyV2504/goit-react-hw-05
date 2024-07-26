import axios from "axios";

const fetchMovies = async () => {
  const Access_Token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NGRhOWNiZWVlNTI3YjU2NGI4YmQ2ZTI2NmQyN2E4NCIsIm5iZiI6MTcyMjAyMzAxMS4zNjA1NzYsInN1YiI6IjY2OWZmZmY2YWVlNjdjYmEzN2RkNTZkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mmBtIbU7XOOKScK_ZzUZioCEu_WIlH26DiZgzTIjano";
  const response = await axios.get(
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
    {
      headers: {
        Authorization: `Bearer ${Access_Token}`,
      },
    }
  );
  return response.data;
};

export default fetchMovies;
