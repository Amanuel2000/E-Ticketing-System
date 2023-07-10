import { Link } from 'react-router-dom'
import './register.css'
import { Lock, Mail, Person } from '@material-ui/icons'

const Register = () => {
  return (
    <div>
      <div className="register">
        <div className="register-card">
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
              <Link to="/fixtures">
                <button>Register</button>
              </Link>
            </form>
            <div className="sm-screen">
              <span>Do you have an account?<Link to="/login" style={{cursor: "pointer", fontSize:"1.2rem", fontWeight:"600", color:"blue"}}> Login
              </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register