import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

import './register.css'
import { Lock, Mail, Person } from '@material-ui/icons'

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup';

const schema = yup.object({
  username: yup.string().required("Username is required").min(4, "Username must at least 4 characters"),
  email: yup.string().required("Email is required").email("Enter a valid email address"),
  password: yup.string().required("Password is required").min(8, "Password must at least 8 characters"),
  confirm_password: yup.string().required("Confirmation is required").oneOf([yup.ref("password")], "Password must be match")
})

const Register = () => {
  // Form validation
  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data) => {
    console.log(data);
  }
  console.log(errors);


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
    <div>
      <div className="register">
        <h1>Register</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-group">
            <Person style={{ color: "#21465b" }}/>
            <input
              type="text"
              {...register("username")}
              placeholder="Username"
              autoComplete="off"
              onChange={handleChange}
              />
          </div>
          <p style={{color:"red", fontSize:"0.9rem", marginTop:"0"}}>{errors.username?.message}</p>

          <div className="input-group">
            <Mail style={{ color: "#21465b" }}/>
            <input
              type="email"
              {...register("email")}
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          <p style={{color:"red"}}>{errors.email?.message}</p>

          <div className="input-group">
            <Lock style={{ color: "#21465b" }}/>
            <input
              type="password"
              {...register("password")}
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
          <p style={{color:"red"}}>{errors.password?.message}</p>

          <div className="input-group">
            <Lock style={{ color: "#21465b" }}/>
            <input
              type="password"
              {...register("confirm_password")}
              placeholder="Confirm Password"
              onChange={handleChange}
            />
          </div>
          <p style={{color:"red"}}>{errors.confirm_password?.message}</p>

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