import ScrollMenu from "react-horizontal-scrolling-menu";
import Arrow from "./Arrow";
import HouseList from "../container/HouseList";
import Navigation from "./Navigation";
import Dropdown from "./Dropdown";
import { useSelector } from "react-redux";
import "../styles/houseList.css";
import "../styles/dashboard.css";



const Dashboard = () => {
  const list = [
    {
      title: "Beautiful family apartment",
      description:
        "Newly renovated rare studio apt on basement level with lots of light and luxury detail. Located in historic Williamsburg in a 1901 house",
      image: "/imgs/houses/todd-kent-178j8tJrNlc-unsplash.jpg",
      rent: 3600,
    },
    {
      title: "Beach Apartment",
      description: "An apartment for couple with the sight of the beach",
      image: "/imgs/houses/todd-kent-178j8tJrNlc-unsplash.jpg",
      rent: 3600,
    },
    {
      title: "Forest Apartment",
      description: "An apartment for couple with the sight of the Forest",
      image: "imgs/houses/webaliser-_TPTXZd9mOo-unsplash.jpg",
      rent: 3600,
    },
  ];
  const menuItems = HouseList({ list });
  const ArrowLeft = Arrow({ text: "", className: "arrow-prev" });
  const ArrowRight = Arrow({ text: "", className: "arrow-next" });
  const { toogle } = useSelector((state) => state.toogle);

  return (
    <div className='dashboard'>
      {toogle && <Dropdown />}
      <div>
      <Navigation />
      <div className="scroll">
        <ScrollMenu
          data={menuItems}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
        />
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
