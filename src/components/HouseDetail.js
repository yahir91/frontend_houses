import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/houseDetail.css";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const HouseDetail = () => {
  const { id } = useParams();
  const arrow = "<";
  const [house, setHouse] = useState(null);
  const [url, setUrl] = useState(null);
  const [favorite, setFavorite] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/houses/${id}`, { withCredentials: true })
      .then((res) => {
        setHouse(res.data.house);
        setUrl(res.data.url);
        setFavorite(res.data.favorite);
      });
  }, []);

  const addToFavorite = () => {
    axios
      .post(
        "http://localhost:4000/favorites",
        {
          house: {
            id: id,
          },
        },
        { withCredentials: true }
      )
      .then((res) => {
        setFavorite(true);
      });
  };

  const deleteFromFavorite = () => {
    axios
      .delete(`http://localhost:4000/favorites/${id}`, { withCredentials: true })
      .then((res) => {
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
                <p>$ {house.rent}</p>
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
              <h2 onClick={deleteFromFavorite}>Remove from favorite</h2>
            ) : (
              <h2 onClick={addToFavorite}>Add to favorite</h2>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default HouseDetail;
