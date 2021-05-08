import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './container/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';
import HouseDetail from './components/HouseDetail';
import Session from './components/Session';
import Registration from './components/Registration';

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
