import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import Cookies from 'universal-cookie';
import { addUserData } from '../redux/userData';
import { changeLogStatus } from '../redux/authentication';

const Dropwdown = () => {
  const cookies = new Cookies();
  const history = useHistory();
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.userData);
  const handleLogOut = () => {
    axios
      .delete('http://localhost:4000/logout', { withCredentials: true })
      .then(res => {
        if (res.data.logged_out) {
          history.push('./');
          dispatch(changeLogStatus('not_log'));
          dispatch(addUserData({}));
          cookies.remove('TOKEN', { path: '/' });
        }
      })
      .catch(error => {
        console.log('succesfully log out', error);
      });
  };
  return (
    <div className="dropdown">
      <img className="round" src="/imgs/user-icon-image-22.jpg" alt="default-user" />
      <span className="username">{user.username}</span>
      <span>Dashboard</span>
      <span>Notifications</span>
      <span>Messages</span>
      <span>Friends </span>
      <span>Statistic</span>
      <div className="help">
        <span>Help</span>
        <span onClick={handleLogOut}>Log Out</span>
      </div>
    </div>
  );
};

export default Dropwdown;
