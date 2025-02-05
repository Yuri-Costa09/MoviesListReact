import MovieCard from "./MovieCard";
import PropTypes from "prop-types";

function ListMovies({ movies }) {
  return (
    <div className="list-movies">
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          moviePoster={movie.Poster}
          movieTitle={movie.Title}
          movieYear={movie.Year}
          movieIMDBRating={movie.imdbRating}
        />
      ))}
    </div>
  );
}

ListMovies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      imdbID: PropTypes.string.isRequired,
      Poster: PropTypes.string,
      Title: PropTypes.string,
      Year: PropTypes.string,
    }),
  ).isRequired,
};

export default ListMovies;
