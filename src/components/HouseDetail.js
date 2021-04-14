import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "../styles/houseDetail.css";

const HouseDetail = () => {
  const { houses } = useSelector((state) => state.house);
  const { id } = useParams();

  return (
    <div className="menu-item-detail">
      {/* <h1>{houses[id].image}</h1> */}
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
  );
};

export default HouseDetail;
