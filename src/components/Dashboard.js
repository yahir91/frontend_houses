import { useSelector } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUserData } from "../redux/userData";
import { changeLogStatus } from "../redux/authentication";

const Dashboard = () => {
  const { user } = useSelector((state) => state.userData);
  const { status } = useSelector((state) => state.authentication);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    axios
      .delete("http://localhost:4000/logout", { withCredentials: true })
      .then((res) => {
        if (res.data.logged_out) {
          history.push("./");
          dispatch(changeLogStatus(false));
          dispatch(addUserData({}));
        }
      })
      .catch((error) => {
        console.log("succesfully log out", error);
      });
  };
  return (
    <div>
      <h1>dashboard</h1>
      {status && <h1>{user.username}</h1>}
      {status && <h2>Succesful login</h2>}
      {status && <button onClick={handleLogOut}>Log Out</button>}
    </div>
  );
};

export default Dashboard;
