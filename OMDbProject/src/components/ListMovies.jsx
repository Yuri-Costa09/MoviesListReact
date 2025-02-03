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
          movieDescription={movie.Plot}
          movieYear={movie.Year}
          movieIMDBRating={movie.imdbRating}
          movieRated={movie.Rated}
          movieRuntime={movie.Runtime}
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
      Plot: PropTypes.string,
      Year: PropTypes.string,
      imdbRating: PropTypes.string,
      Rated: PropTypes.string,
      Runtime: PropTypes.string,
    })
  ).isRequired,
};

export default ListMovies;
