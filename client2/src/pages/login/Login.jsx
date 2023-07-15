import { Link } from 'react-router-dom'
import './login.css'
import { Lock, Person } from '@material-ui/icons'

import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "../../context/AuthProvider";

import axios from '../../api/axios';
const LOGIN_URL = '/auth';

const Login = () => {
  const { setAuth } = useContext(AuthContext);

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
      userRef.current.focus();
  }, [])

  useEffect(() => {
      setErrMsg('');
  }, [user, pwd])

  const handleSubmit = async (e) => {
      e.preventDefault();

      try {
          const response = await axios.post(LOGIN_URL,
              JSON.stringify({ user, pwd }),
              {
                  headers: { 'Content-Type': 'application/json' },
                  withCredentials: true
              }
          );
          console.log(JSON.stringify(response?.data));
          //console.log(JSON.stringify(response));
          const accessToken = response?.data?.accessToken;
          const roles = response?.data?.roles;
          setAuth({ user, pwd, roles, accessToken });
          setUser('');
          setPwd('');
          setSuccess(true);
      } catch (err) {
          if (!err?.response) {
              setErrMsg('No Server Response');
          } else if (err.response?.status === 400) {
              setErrMsg('Missing Username or Password');
          } else if (err.response?.status === 401) {
              setErrMsg('Unauthorized');
          } else {
              setErrMsg('Login Failed');
          }
          errRef.current.focus();
      }
  }


  return (
    <div>
      {success ? (
                <section>
                  <h1>You are logged in!</h1>
                  <br />
                  <p>
                    <Link to="/fixtures">Go To Fixtures</Link>
                  </p>
                </section>
            ) : (
                <div className="login">
                  <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

                  <div className="login-card">
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}>

                      <label htmlFor="username">
                        Username:
                      </label>
                      <div>
                        <Person style={{ color: "#21465b" }}/>
                        <input
                          type="text"
                          id="username"
                          ref={userRef}
                          autoComplete="off"
                          onChange={(e) => setUser(e.target.value)}
                          value={user}
                          required />
                      </div>

                      <label htmlFor="password">
                        Password:
                      </label>
                      <div>
                        <Lock style={{ color: "#21465b" }}/>
                        <input
                          type="password"
                          id="password"
                          onChange={(e) => setPwd(e.target.value)}
                          value={pwd}
                          required />
                      </div>

                      <button disabled={!user || !pwd ? true : false}>Login</button>
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
    </div>
  )
}

export default Login