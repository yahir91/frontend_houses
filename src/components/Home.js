import Registration from "../auth/Registration";
import Session from "../auth/Session";
import { useSelector } from "react-redux";

const Home = () => {
  const { status } = useSelector((state) => state.authentication);

  return (
    <div>
      <h1>home</h1>
      <h1>status:{status}</h1>
      <Registration />
      <Session />
    </div>
  );
};

export default Home;
