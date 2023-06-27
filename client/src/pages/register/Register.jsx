import { Link } from "react-router-dom";
import "./register.scss";
import { Lock, Mail, Person } from "@mui/icons-material";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Welcome</h1>
          <p>
            Watch all Ethiopian Premier League football matches. Buy tickets online and Enjoy the game.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <div className="inputBox">
              <Person style={{ color: "#21465b" }}/>
              <input type="text" placeholder="Name" />
            </div>
            <div className="inputBox">
              <Mail style={{ color: "#21465b" }}/>
              <input type="email" placeholder="Email" />
            </div>
            <div className="inputBox">
              <Lock style={{ color: "#21465b" }}/>
              <input type="password" placeholder="Password" />
            </div>
            <div className="inputBox">
              <Lock style={{ color: "#21465b" }}/>
              <input type="password" placeholder="Confirm Password" />
            </div>
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
