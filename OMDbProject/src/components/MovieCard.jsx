import PropTypes from "prop-types";

function MovieCard({
  moviePoster,
  movieTitle,
  movieDescription,
  movieYear,
  movieIMDBRating,
  movieRated,
  movieRuntime,
}) {
  return (
    <div className="movie-card">
      <img src={moviePoster} alt={movieTitle} />
      <h3>{movieTitle}</h3>
      <p>{movieDescription}</p>
      <p>Year: {movieYear}</p>
      <p>IMDB Rating: {movieIMDBRating}</p>
      <p>Rated: {movieRated}</p>
      <p>Runtime: {movieRuntime}</p>
    </div>
  );
}

MovieCard.propTypes = {
  moviePoster: PropTypes.string.isRequired,
  movieTitle: PropTypes.string.isRequired,
  movieDescription: PropTypes.string.isRequired,
  movieYear: PropTypes.string.isRequired,
  movieIMDBRating: PropTypes.string.isRequired,
  movieRated: PropTypes.string.isRequired,
  movieRuntime: PropTypes.string.isRequired,
};

export default MovieCard;
