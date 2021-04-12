import ScrollMenu from "react-horizontal-scrolling-menu";
import House from "./House";
import Arrow from "./Arrow";
import HouseList from '../container/HouseList';

const Dashboard = () => {
  const list = [
    { name: "item1" },
    { name: "item2" },
    { name: "item3" },
    { name: "item4" },
    { name: "item5" },
    { name: "item6" },
    { name: "item7" },
    { name: "item8" },
    { name: "item9" },
  ];
  const menuItems = HouseList({list});
  const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
  const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

  return (
    <div className="App">
      <ScrollMenu
        data={menuItems}
        arrowLeft={ArrowLeft}
        arrowRight={ArrowRight}
      />
    </div>
  );
};

export default Dashboard;
