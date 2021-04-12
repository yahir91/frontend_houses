import House from '../components/House';

const HouseList = ({list}) =>
  list.map((el) => {
    const { name } = el;

    return <House text={name} key={name} />;
  });

export default HouseList;