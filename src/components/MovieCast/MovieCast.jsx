import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../services/api";

const MovieCast = () => {
  const params = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCast(params.movieId).then((data) => setCast(data));
  }, [params.movieId]);

  return <div></div>;
};

export default MovieCast;
