import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addUserData } from "../redux/userData";
import { changeLogStatus } from "../redux/authentication";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import "../styles/session.css";

const Session = ({ handleSession }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registrationErrors, setRegistrationErrors] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const { status } = useSelector((state) => state.authentication);
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
        console.log(res.data);
        if (res.data.status === "created") {
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
      <span>Forgot Password?</span>
    </div>
  );
};

export default Session;
