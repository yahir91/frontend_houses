import { useState } from "react";
import axios from "axios";

const Registration = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [registrationErrors, setRegistrationErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(
      "http://localhost:4000/registration",
      {
        user: {
          username: username,
          password: password,
          password_confirmation: password_confirmation,
        },
      },
      { withCredentials: true }
    );
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
