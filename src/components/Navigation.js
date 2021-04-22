import '../styles/navigation.css';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { changeToogle } from '../redux/toogle';

const Navigation = ({ handleFavorite, toogleFavorite }) => {
  const dispatch = useDispatch();
  const { toogle } = useSelector(state => state.toogle);

  const toogleData = () => {
    dispatch(changeToogle(!toogle));
  };
  return (
    <div className="navigation">
      <div
        onClick={toogleData}
        role="button"
        tabIndex="0"
        onKeyPress={toogleData}
      >
        <img className="option-img" src="/imgs/options.png" alt="options" />
      </div>
      <h2>Houses</h2>
      {!toogleFavorite ? (
        <span
          role="button"
          tabIndex="0"
          onKeyPress={handleFavorite}
          type="button"
          onClick={handleFavorite}
        >
          Favorites
        </span>
      ) : (
        <span
          role="button"
          tabIndex="0"
          onKeyPress={handleFavorite}
          type="button"
          onClick={handleFavorite}
        >
          All Houses
        </span>
      )}
    </div>
  );
};

Navigation.propTypes = {
  handleFavorite: PropTypes.func.isRequired,
  toogleFavorite: PropTypes.bool.isRequired,
};

export default Navigation;
