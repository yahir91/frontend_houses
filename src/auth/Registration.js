import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';

import Cookies from 'universal-cookie';
import { changeLogStatus } from '../redux/authentication';
import { addUserData } from '../redux/userData';
import '../styles/session.css';

const Registration = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const cookies = new Cookies();

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post(
        'http://localhost:4000/registration',
        {
          user: {
            username,
            password,
            password_confirmation,
          },
        },
        { withCredentials: true },
      )
      .then(res => {
        if (res.data.status === 'created') {
          cookies.set('TOKEN', 'pacman', {
            path: '/',
          });
          dispatch(changeLogStatus('log_in'));
          dispatch(addUserData(res.data.user));
          history.push('/dashboard');
        }
      })
      .catch(error => {
        console.log('registration error', error);
      });
  };

  return (
    <div className="session">
      <div>
        <img src="/imgs/background.jpg" alt="background" />
        <h1>Register</h1>
        <p>Hello there! Register and start managing your system</p>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <input
          className="confirmation"
          type="password"
          placeholder="Password Confirmation"
          value={password_confirmation}
          onChange={e => setPasswordConfirmation(e.target.value)}
          required
        />
        <button type="Submit">Register</button>
      </form>
      <Link to="/"><span>Sign in</span></Link>
    </div>
  );
};

export default Registration;
