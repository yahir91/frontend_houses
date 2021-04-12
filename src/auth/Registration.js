import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addUserData } from "../redux/userData";
import { changeLogStatus } from "../redux/authentication";
import { useHistory } from "react-router-dom";


const Registration = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [registrationErrors, setRegistrationErrors] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
 
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:4000/registration",
        {
          user: {
            username: username,
            password: password,
            password_confirmation: password_confirmation,
          },
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.status === "created") {
          dispatch(changeLogStatus('log_in'));
          dispatch(addUserData(res.data.user));
          history.push("/dashboard");
        }
      })
      .catch((error) => {
        console.log("registration error", error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <input
          type="password"
          placeholder="Password Confirmation"
          value={password_confirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          required
        />
        <button type="Submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
