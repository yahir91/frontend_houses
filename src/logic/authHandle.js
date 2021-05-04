import Cookies from 'universal-cookie';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addUserData } from '../redux/userData';

const cookies = new Cookies();
const dispatch = useDispatch();
const history = useHistory();

const authenticationHandle = res => {
  if (res.data.status === 'success') {
    const { token } = res.data;
    cookies.set('TOKEN', token, {
      path: '/',
    });
    dispatch(addUserData(res.data.user));
    history.push('/dashboard');
  }
};

export default authenticationHandle;
