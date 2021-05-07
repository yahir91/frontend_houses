import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

import '../styles/session.css';
import { useAxios } from '../logic/requestUrl';

const Session = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      email,
      password,
    };

    useAxios('/users/sign_in', data).then(() => {
      history.push('/dashboard');
    }).catch(() => {
      setError(true);
    });
  };

  return (
    <div className="session">
      <div>
        <img src="/imgs/background.jpg" alt="background" />
        <h1>Sign in</h1>
        <p>Hello there! Sign in and start managing your system</p>
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
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign In</button>
      </form>
      {error && <span className="error">Wrong email or password</span>}
      <Link to="/register">
        <span>Register</span>
      </Link>
    </div>
  );
};

export default Session;
