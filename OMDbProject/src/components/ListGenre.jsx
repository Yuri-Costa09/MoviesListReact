import GenreCard from "./GenreCard";
import PropTypes from "prop-types";

function ListGenre({ genres }) {
  return (
    <div>
      {genres.map((genre) => (
        <GenreCard
          key={genre.id}
          title={genre.title}
          image={genre.image}
          alt={genre.alt}
        />
      ))}
    </div>
  );
}

ListGenre.propTypes = {
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ListGenre;
