import PropTypes from "prop-types";

function GenreCard({ title, image, alt }) {
  return (
    <div>
      <img src={image} alt={alt} />
      <h3>{title}</h3>
    </div>
  );
}

GenreCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default GenreCard;
