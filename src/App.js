import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import { useEffect } from 'react';
import { addUserData } from "./redux/userData";
import { changeLogStatus } from "./redux/authentication";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import axios from 'axios'

function App() {
  const dispatch = useDispatch()
  const history = useHistory()
  const { status } = useSelector((state) => state.authentication);


  useEffect(()=> {
    axios.get('http://localhost:4000/logged_in', {withCredentials: true})
    .then(res => {
      if(res.data.logged_in && status===false) {
        dispatch(changeLogStatus(true));
        dispatch(addUserData(res.data.user))
      } else if (!res.data.logged_in && status===true) {
        dispatch(changeLogStatus(false));
        dispatch(addUserData({}))
      }
    })
    .catch(error => {
      console.log('somethin wrong', error)
    })
  },[])

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
