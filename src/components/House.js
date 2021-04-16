import { Link } from "react-router-dom";
import "../styles/house.css";

const House = ({ house, index, urls }) => {
  return (
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
              <p>$ {house.rent}</p>
              <span>per month</span>
            </div>
          </div>
        </div>
      )}
    </Link>
  );
};

export default House;
