import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../services/api";
import s from "../MovieReviews/MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const data = await fetchMovieReviews(movieId);
        setReviews(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getReviews();
  }, [movieId]);

  return (
    <div className={s.movieReviews}>
      {reviews.length > 0 ? (
        <ul className={s.reviewList}>
          {reviews.map((reviews) => (
            <li key={reviews.id} className={s.reviewItem}>
              <h3 className={s.reviewAuthor}>Author: {reviews.author}</h3>
              <p className={s.reviewContent}>{reviews.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews available for this movie.</p>
      )}
    </div>
  );
};

export default MovieReviews;
