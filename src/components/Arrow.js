import PropTypes from 'prop-types';

const Arrow = ({ text, className }) => (
  <div
    className={className}
  >
    {text}
  </div>
);

Arrow.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Arrow;
