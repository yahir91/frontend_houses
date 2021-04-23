import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Dashboard from './container/Dashboard';
import { addUserData } from './redux/userData';
import { changeLogStatus } from './redux/authentication';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';
import HouseDetail from './components/HouseDetail';
import CreateHouse from './components/CreateHouse';
import Session from './auth/Session';
import Registration from './auth/Registration';
import baseUrl from './request/requestUrl';

const fetchItems = status => async dispatch => {
  axios
    .get(`${baseUrl}/logged_in`, { withCredentials: true })
    .then(res => {
      dispatch(addUserData(res.data.user));
      if (res.data.logged_in && status === 'not_log') {
        dispatch(changeLogStatus('log_in'));
        dispatch(addUserData(res.data.user));
      } else if (!res.data.logged_in && status === 'log_in') {
        dispatch(changeLogStatus('not_log'));
        dispatch(addUserData({}));
      }
    });
};

function App() {
  const dispatch = useDispatch();
  const { status } = useSelector(state => state.authentication);

  useEffect(() => {
    dispatch(fetchItems(status));
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Session />
        </Route>
        <Route exact path="/register">
          <Registration />
        </Route>
        <Route exact path="/create">
          <CreateHouse />
        </Route>
        <ProtectedRoute
          exact
          path="/dashboard"
          component={Dashboard}
        />
        <ProtectedRoute
          exact
          path="/house/:id"
          component={HouseDetail}
        />
      </Switch>
    </Router>
  );
}

export default App;
