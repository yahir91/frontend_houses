import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/houseDetail.css";
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const HouseDetail = () => {
  const { id } = useParams();
  const arrow = "<";
  const [house, setHouse] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:4000/houses/${id}`).then((res) => {
      setHouse(res.data.house);
      setUrl(res.data.url);
      console.log(res.data.house)
      console.log(res.data.url)
    });
  }, []);

  return (
    <div className="menu-item-detail">
      { (house && url) &&
      <>
      <div className="titleCard">
        <Link to='/dashboard'><span>{arrow}</span></Link>
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
        <h2>Add to favorite</h2>
      </div>
      </> }
    </div>
  );
};

export default HouseDetail;
