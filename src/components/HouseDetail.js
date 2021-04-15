import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/houseDetail.css";

const HouseDetail = () => {
  const { houses } = useSelector((state) => state.house);
  const { id } = useParams();
  const arrow = "<";

  return (
    <div className="menu-item-detail">
      <div className="titleCard">
        <Link to='/dashboard'><span>{arrow}</span></Link>
        <span>{houses[1].title}</span>
      </div>
      <div className="imageCard">
        <img src={houses[id].image} alt="house" className="houseImage-detail" />
        <div className="card-info-detail">
          <div>
            <h2>{houses[id].title}</h2>
            <p>*****</p>
          </div>
          <div>
            <p>$ {houses[id].rent}</p>
            <span>per month</span>
          </div>
        </div>
      </div>
      <div className="descriptionCard">
        <h1>About this listing</h1>
        <p>{houses[id].description}</p>
      </div>
      <div className="favoriteCard">
        <h2>Add to favorite</h2>
      </div>
    </div>
  );
};

export default HouseDetail;
