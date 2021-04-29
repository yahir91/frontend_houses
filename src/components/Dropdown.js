import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Cookies from 'universal-cookie';
import { addUserData } from '../redux/userData';
import { changeLogStatus } from '../redux/authentication';
import { logOutRequest } from '../request/requestUrl';

const Dropwdown = () => {
  const cookies = new Cookies();
  const history = useHistory();
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.userData);
  const handleLogOut = () => {
    const token = cookies.get('TOKEN');
    const headers = { headers: { Authorization: `Bearer ${token}` } };
    logOutRequest('delete', '/users/sign_out', headers)
      .then(res => {
        if (res.data.status === 'success') {
          history.push('./');
          dispatch(changeLogStatus('not_log'));
          dispatch(addUserData({}));
          cookies.remove('TOKEN', { path: '/' });
        }
      });
  };
  return (
    <div className="dropdown">
      <img className="round" src="/imgs/user-icon-image-22.jpg" alt="default-user" />
      {user && <span className="username">{user.username}</span>}
      <span>Dashboard</span>
      <span>Notifications</span>
      <span>Messages</span>
      <span>Friends </span>
      <span>Statistic</span>
      <div className="help">
        <span>Help</span>
        <span role="button" tabIndex="0" onKeyPress={handleLogOut} onClick={handleLogOut}>Log Out</span>
      </div>
    </div>
  );
};

export default Dropwdown;
