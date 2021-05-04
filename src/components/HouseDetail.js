import { useParams, Link } from 'react-router-dom';

import '../styles/houseDetail.css';
import { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import { getAndDeleteRequests, addToFavorites } from '../logic/requestUrl';

const cookies = new Cookies();

const HouseDetail = () => {
  const { id } = useParams();
  const arrow = '<';
  const [house, setHouse] = useState(null);
  const [url, setUrl] = useState(null);
  const [favorite, setFavorite] = useState(false);
  const token = cookies.get('TOKEN');

  useEffect(() => {
    const token = cookies.get('TOKEN');

    const headers = { headers: { Authorization: `Bearer ${token}` } };
    const path = `/houses/${id}`;
    getAndDeleteRequests('get', path, headers)
      .then(res => {
        setHouse(res.data.house);
        setUrl(res.data.url);
        setFavorite(res.data.favorite);
      });
  }, []);

  const addToFavorite = () => {
    const data = {
      house: {
        id,
      },
    };
    const headers = { headers: { Authorization: `Bearer ${token}` } };

    addToFavorites('post', '/favorites', data, headers).then(() => {
      setFavorite(true);
    });
  };

  const deleteFromFavorite = () => {
    const headers = { headers: { Authorization: `Bearer ${token}` } };

    getAndDeleteRequests('delete', `/favorites/${id}`, headers).then(() => {
      setFavorite(false);
    });
  };

  return (
    <div className="menu-item-detail">
      {house && url && (
        <>
          <div className="titleCard">
            <Link to="/dashboard">
              <span>{arrow}</span>
            </Link>
            <span>{house.title}</span>
          </div>
          <div className="imageCard">
            <img src={url} alt="house" className="houseImage-detail" />
            <div className="card-info-detail">
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
          <div className="descriptionCard">
            <h1>About this listing</h1>
            <p>{house.description}</p>
          </div>
          <div className="favoriteCard">
            {favorite ? (
              <span
                role="button"
                tabIndex="0"
                onKeyPress={deleteFromFavorite}
                onClick={deleteFromFavorite}
              >
                Remove from favorite
              </span>
            ) : (
              <span
                role="button"
                tabIndex="0"
                onKeyPress={addToFavorite}
                onClick={addToFavorite}
              >
                Add to favorite
              </span>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default HouseDetail;
