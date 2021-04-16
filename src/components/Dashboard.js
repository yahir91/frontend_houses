import ScrollMenu from "react-horizontal-scrolling-menu";
import Arrow from "./Arrow";
import HouseList from "../container/HouseList";
import Navigation from "./Navigation";
import Dropdown from "./Dropdown";
import { useSelector } from "react-redux";
import "../styles/houseList.css";
import "../styles/dashboard.css";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [houseList, setHouseList] = useState(null);
  const [urls, setUrls] = useState(null);
  useEffect(() => {
    axios.get("http://localhost:4000/houses").then((res) => {
      setHouseList(res.data.house);
      setUrls(res.data.urls);
    });
  }, []);
  const menuItems = HouseList({ houseList, urls });
  const ArrowLeft = Arrow({ text: "", className: "arrow-prev" });
  const ArrowRight = Arrow({ text: "", className: "arrow-next" });
  const { toogle } = useSelector((state) => state.toogle);

  return (
    <div>
      <div className="dashboard">
        {toogle && <Dropdown />}
        <div>
          <Navigation />
          <div className={`scroll ${toogle ? "box-shadow" : ""}`}>
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
