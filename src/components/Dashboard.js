import ScrollMenu from 'react-horizontal-scrolling-menu';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Arrow from './Arrow';
import HouseList from '../container/HouseList';
import Navigation from './Navigation';
import Dropdown from './Dropdown';
import '../styles/houseList.css';
import '../styles/dashboard.css';

const Dashboard = () => {
  const [houseList, setHouseList] = useState(null);
  const [urls, setUrls] = useState(null);
  const [favorite, setFavorite] = useState(null);
  const [toogleFavorite, setToogleFavorite] = useState(false);
  const [favoriteUrls, setFavoriteUrls] = useState(null);
  useEffect(() => {
    axios.get('http://localhost:4000/houses').then(res => {
      setHouseList(res.data.house);
      setUrls(res.data.urls);
    });
    axios
      .get('http://localhost:4000/favorites', { withCredentials: true })
      .then(res => {
        setFavorite(res.data.favorites_houses);
        setFavoriteUrls(res.data.favorite_urls);
      });
  }, []);

  const toogleFavorites = () => {
    setToogleFavorite(!toogleFavorite);
  };

  const menuItems = HouseList({
    houseList: toogleFavorite ? favorite : houseList,
    urls: toogleFavorite ? favoriteUrls : urls,
  });
  const ArrowLeft = Arrow({ text: '', className: 'arrow-prev' });
  const ArrowRight = Arrow({ text: '', className: 'arrow-next' });
  const { toogle } = useSelector(state => state.toogle);

  return (
    <div>
      <div className="dashboard">
        {toogle && <Dropdown />}
        <div>
          <Navigation
            toogleFavorite={toogleFavorite}
            handleFavorite={toogleFavorites}
          />
          <div className={`scroll ${toogle ? 'box-shadow' : ''}`}>
            <ScrollMenu
              data={menuItems}
              arrowLeft={ArrowLeft}
              arrowRight={ArrowRight}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
