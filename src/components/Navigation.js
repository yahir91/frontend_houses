import '../styles/navigation.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeToogle } from '../redux/toogle';

const Navigation = ({ handleFavorite, toogleFavorite }) => {
  const dispatch = useDispatch();
  const { toogle } = useSelector(state => state.toogle);

  const toogleData = () => {
    dispatch(changeToogle(!toogle));
  };
  return (
    <div className="navigation">
      <img onClick={toogleData} className="option-img" src="/imgs/options.png" alt="options" />
      <h2>Houses</h2>
      {!toogleFavorite ? <h2 onClick={handleFavorite}>Favorites</h2> : <h2 onClick={handleFavorite}>All Houses</h2> }
    </div>
  );
};

export default Navigation;
