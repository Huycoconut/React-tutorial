import PropTypes from "prop-types";
import './MainContent.css';

function MainContent({ image, title, desc }) {
  return (
    <>
      <li>
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p>{desc}</p>
      </li>
    </>
  );
}

MainContent.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default MainContent;
