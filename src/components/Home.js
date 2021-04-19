import { useSelector } from 'react-redux';
import Registration from '../auth/Registration';
import Session from '../auth/Session';

const Home = () => {
  const { status } = useSelector(state => state.authentication);

  return (
    <div>
      <Session />
    </div>
  );
};

export default Home;
