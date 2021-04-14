import House from '../components/House';

const HouseList = ({list}) =>
  list.map((item, index) => {

    return <House house={item} index={index} key={item.title + index} />;
  });

export default HouseList;