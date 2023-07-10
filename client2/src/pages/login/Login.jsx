import { Link } from 'react-router-dom'
import './login.css'
import { Lock, Mail } from '@material-ui/icons'

const Login = () => {
  return (
    <div>
      <div className="login">
        <div className="login-card">
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
                <Mail style={{ color: "#21465b" }}/>
                <input type="email" placeholder="Email" />
              </div>
              <div className="inputBox">
                <Lock style={{ color: "#21465b" }}/>
                <input type="password" placeholder="Password" />
              </div>
              <Link to="/fixtures">
                <button>Login</button>
              </Link>
            </form>
            <div className="sm-screen">
              <span>Don't you have an account?<Link to="/register" style={{cursor: "pointer", fontSize:"1.2rem", fontWeight:"600", color:"blue"}}> Register</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login