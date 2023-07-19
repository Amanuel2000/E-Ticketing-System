import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import './login.css'
import {Person, Lock } from '@material-ui/icons'

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setErr] = useState(false);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const { login } = useContext(AuthContext);


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/")
    } catch (err) {
      setErr(err.response.data);
    }
  };

  return (
    <div className="login">
      <div className="login-card">
        <h1>Login</h1>
        <form>
          <div className="input-group">
            <Person style={{ color: "#21465b" }}/>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <Lock style={{ color: "#21465b" }}/>
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
          </div>
          {err && err}
          <button onClick={handleLogin}>Login</button>
        </form>

        <p>
          Don't you have an account?
          <Link to="/register" style={{cursor: "pointer", fontSize:"1.2rem", fontWeight:"600", color:"blue"}}> <span>Register</span>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login