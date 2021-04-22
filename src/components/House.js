import { Link } from 'react-router-dom';
import '../styles/house.css';
import PropTypes from 'prop-types';

const House = ({ house, index, urls }) => (
  <Link to={`/house/${house.id}`}>
    {urls && (
    <div className="menu-item">
      <img src={urls[index]} alt="house" className="houseImage" />
      <div className="card-info">
        <div>
          <h2>{house.title}</h2>
          <p>*****</p>
        </div>
        <div>
          <p>
            $
            {house.rent}
          </p>
          <span>per month</span>
        </div>
      </div>
    </div>
    )}
  </Link>
);

House.propTypes = {
  house: PropTypes.exact({
    title: PropTypes.string,
    rent: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.number,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
  urls: PropTypes.arrayOf(PropTypes.string),
};

House.defaultProps = {
  urls: [],
};

export default House;
