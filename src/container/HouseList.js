import House from '../components/House';

const HouseList = ({houseList, urls}) =>
  houseList?.map((item, index) => {

    return <House urls={urls} house={item} index={index} key={item.title + index} />;
  });

export default HouseList;