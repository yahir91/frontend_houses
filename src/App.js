import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './container/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';
import HouseDetail from './components/HouseDetail';
import CreateHouse from './components/CreateHouse';
import Session from './auth/Session';
import Registration from './auth/Registration';

function App() {
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
