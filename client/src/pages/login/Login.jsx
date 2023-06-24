import { Link } from "react-router-dom";
import "./login.scss";
import { Lock, Mail } from "@mui/icons-material";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Welcome</h1>
          <p>
            Watch all Ethiopian Premier League football matches. Buy tickets online and Enjoy the game.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <div className="inputBox">
              <Mail />
              <input type="email" placeholder="Email" />
            </div>
            <div className="inputBox">
              <Lock />
              <input type="password" placeholder="Password" />
            </div>
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
