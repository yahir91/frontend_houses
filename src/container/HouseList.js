import House from '../components/House';

const HouseList = ({ houseList, urls }) => houseList?.map((item, index) => (
  <House urls={urls} house={item} index={index} key={item.title} />
));

export default HouseList;
