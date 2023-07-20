import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';


import './register.css'
import { Lock, Mail, Person } from '@material-ui/icons'



const Register = () => {
  
 
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });
  const [err, setErr] = useState(null);
  const navigate = useNavigate()

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs);
      navigate("/login")
    } catch (err) {
      setErr(err.response.data);
    }
  };

  return (
    <div className="register">
      <div className="register-card">
        <h1>Register</h1>
        <form  >
          
          <div className="input-group">
           <Person style={{ color: "#21465b" }}/>
            <input
              
              type="text" placeholder="Full Name"
               name="name"
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <Person style={{ color: "#21465b" }}/>
            <input
              type="text"
              name="username"
              placeholder="Username"
              autoComplete="off"
              onChange={handleChange}
              />
          </div>
          

          <div className="input-group">
            <Mail style={{ color: "#21465b" }}/>
            <input
              type="email"
               name="email"
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          

          <div className="input-group">
            <Lock style={{ color: "#21465b" }}/>
            <input
              type="password"
               name="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
        

           

          {err && err }
          <button onClick={handleClick}>Register</button>
        </form>

        <p>
          Do you have an account?
          <Link to="/login" style={{cursor: "pointer", fontSize:"1.2rem", fontWeight:"600", color:"blue"}}> <span>Login</span>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Register