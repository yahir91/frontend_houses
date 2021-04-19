import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addUserData } from "../redux/userData";
import { changeLogStatus } from "../redux/authentication";
import { useHistory } from "react-router-dom";
import Cookies from "universal-cookie";
import "../styles/session.css";
import { Link } from "react-router-dom";


const Session = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const cookies = new Cookies();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:4000/sessions",
        {
          user: {
            username: username,
            password: password,
          },
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.status === "created") {
          cookies.set("TOKEN", 'pacman', {
            path: "/",
          });
          dispatch(addUserData(res.data.user));
          dispatch(changeLogStatus("log_in"));
          history.push("/dashboard");
        }
      })
      .catch((error) => {
        console.log("registration error", error);
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
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="Submit">Sign In</button>
      </form>
      <Link to={'/register'}><span>Register</span></Link>
    </div>
  );
};

export default Session;
