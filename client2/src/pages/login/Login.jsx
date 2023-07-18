import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import './login.css'
import {Person, Lock } from '@material-ui/icons'

const Login = () => {
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');

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
    <div>
      <div className="login">
        <div className="login-card">
          <h1>Login</h1>
          <form>
            <div>
              <Person style={{ color: "#21465b" }}/>
              <input
                type="text"
                placeholder="Username" name="username"  onChange={handleChange}
                value={user}
                required />
            </div>
            <div>
              <Lock style={{ color: "#21465b" }}/>
              <input
                type="password"
                placeholder="Password" name="password"  onChange={handleChange}
                value={pwd}
                required />
            </div>
            {err && err}
            <button disabled={!user || !pwd ? true : false} onClick={handleLogin}>Login</button>
          </form>

          <p>
            Don't you have an account?
            <Link to="/register" style={{cursor: "pointer", fontSize:"1.2rem", fontWeight:"600", color:"blue"}}> <span>Register</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login