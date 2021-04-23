import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';

import Cookies from 'universal-cookie';
import { changeLogStatus } from '../redux/authentication';
import { addUserData } from '../redux/userData';
import '../styles/session.css';
// import baseUrl from '../request/requestUrl';

const Registration = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const cookies = new Cookies();

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post(
        // `${baseUrl}/registration`,
        'http://localhost:4000/users/sign_up',
        {
          email,
          password,
          passwordConfirmation,
          name,
        },
      )
      .then(res => {
        if (res.data.status === 'success') {
          cookies.set('TOKEN', 'pacman', {
            path: '/',
          });
          dispatch(changeLogStatus('log_in'));
          dispatch(addUserData(res.data.user));
          history.push('/dashboard');
        }
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
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Username"
          value={name}
          onChange={e => setName(e.target.value)}
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
          value={passwordConfirmation}
          onChange={e => setPasswordConfirmation(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
      <Link to="/"><span>Sign in</span></Link>
    </div>
  );
};

export default Registration;
