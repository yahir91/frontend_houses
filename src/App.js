import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import { useEffect } from "react";
import { addUserData } from "./redux/userData";
import { changeLogStatus } from "./redux/authentication";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProtectedRoute from "./components/ProtectedRoute";
import axios from "axios";
import "./App.css";
import Navlinks from "./components/Navlinks";
import HouseDetail from './components/HouseDetail';

const fetchItems = (status) => async (dispatch) => {
  axios
    .get("http://localhost:4000/logged_in", { withCredentials: true })
    .then((res) => {
      if (res.data.logged_in && status === "not_log") {
        dispatch(changeLogStatus("log_in"));
        dispatch(addUserData(res.data.user));
        console.log(status);
      } else if (!res.data.logged_in && status === "log_in") {
        dispatch(changeLogStatus("not_log"));
        dispatch(addUserData({}));
        console.log("hel");
      } else {
        console.log(status);
      }
    })
    .catch((error) => {
      console.log("something wrong:", error);
    });
};

function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  let { status } = useSelector((state) => state.authentication);
  let { user } = useSelector((state) => state.userData);

  useEffect(() => {
    dispatch(fetchItems(status));
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/navlinks">
          <Navlinks />
        </Route>
        <ProtectedRoute
          exact
          path="/dashboard"
          status={status}
          component={Dashboard}
        />
        <Route exact path={"/house/:id"}>
          <HouseDetail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
