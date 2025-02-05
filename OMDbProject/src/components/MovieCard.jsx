import PropTypes from "prop-types";

function MovieCard({ moviePoster, movieTitle, movieYear }) {
  return (
    <div className="movie-card">
      <img className="movie-poster" src={moviePoster} alt={movieTitle} />
      <h3 className="movie-title">{movieTitle}</h3>
      <p className="movie-year">Year: {movieYear}</p>
    </div>
  );
}

MovieCard.propTypes = {
  moviePoster: PropTypes.string.isRequired,
  movieTitle: PropTypes.string.isRequired,
  movieYear: PropTypes.string.isRequired,
};

export default MovieCard;
