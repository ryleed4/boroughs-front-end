import { useState } from "react";
import { loginUser } from "../api/login";
import { useNavigate } from "react-router-dom";
import useAuth from "../useAuth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await loginUser(email, password);
      console.log("result", result);
      setToken(result.token);
      localStorage.setItem("token", result.token);
      console.log("token from login", result.token);
      navigate("/authors");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Sign in:</h2>
      <form onSubmit={handleSubmit}>
        <div className="email">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="password">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
