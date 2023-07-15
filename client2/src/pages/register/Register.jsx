import { Link } from 'react-router-dom'
import './register.css'
import { Lock, Mail, Person } from '@material-ui/icons'

import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from '../../api/axios';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const REGISTER_URL = '/register';

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
      userRef.current.focus();
  }, [])

  useEffect(() => {
      setValidName(USER_REGEX.test(user));
  }, [user])

  useEffect(() => {
      setValidEmail(EMAIL_REGEX.test(email));
  }, [email])

  useEffect(() => {
      setValidPwd(PWD_REGEX.test(pwd));
      setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd])

  useEffect(() => {
      setErrMsg('');
  }, [user, pwd, matchPwd])

  const handleSubmit = async (e) => {
      e.preventDefault();
      // if button enabled with JS hack
      const v1 = USER_REGEX.test(user);
      const v2 = EMAIL_REGEX.test(email);
      const v3 = PWD_REGEX.test(pwd);
      if (!v1 || !v2 || !v3) {
          setErrMsg("Invalid Entry");
          return;
      }
      try {
          const response = await axios.post(REGISTER_URL,
              JSON.stringify({ user, email, pwd }),
              {
                  headers: { 'Content-Type': 'application/json' },
                  withCredentials: true
              }
          );
          console.log(response?.data);
          console.log(response?.accessToken);
          console.log(JSON.stringify(response))
          setSuccess(true);
          //clear state and controlled inputs
          //need value attrib on inputs for this
          setUser('');
          setEmail('');
          setPwd('');
          setMatchPwd('');
      } catch (err) {
          if (!err?.response) {
              setErrMsg('No Server Response');
          } else if (err.response?.status === 409) {
              setErrMsg('Email Taken');
          } else {
              setErrMsg('Registration Failed')
          }
          errRef.current.focus();
      }
  }

  return (
    <div>
      {success ? (
                <section>
                    <h1>Success!</h1>
                    <p>
                      <Link to="/login">Login</Link>
                    </p>
                </section>
            ) : (
                <div className="register">
                  <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

                  <div className="register-card">
                    <h1>Register</h1>
                    <form onSubmit={handleSubmit}>
                      <label htmlFor="username">
                        Username:
                        <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                        <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} />
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
                          required
                          aria-invalid={validName ? "false" : "true"}
                          aria-describedby="usernamenote"
                          onFocus={() => setUserFocus(true)}
                          onBlur={() => setUserFocus(false)}/>
                      </div>
                      <p id="usernamenote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        <div>
                          4 to 24 characters.<br />
                          Must begin with a letter.<br />
                          Letters, numbers, underscores, hyphens allowed.
                        </div>
                      </p>

                      <label htmlFor="email">
                        Email:
                        <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
                        <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hide" : "invalid"} />
                      </label>
                      <div>
                        <Mail style={{ color: "#21465b" }}/>
                        <input
                          type="email"
                          id="email"
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          required
                          aria-invalid={validEmail ? "false" : "true"}
                          aria-describedby="emailnote"
                          onFocus={() => setEmailFocus(true)}
                          onBlur={() => setEmailFocus(false)}/>
                      </div>
                      <p id="emailnote" className={emailFocus && !validEmail ? "instructions" : "offscreen"}>
                          <FontAwesomeIcon icon={faInfoCircle} />
                          Email Field Invalid
                      </p>

                      <label htmlFor="password">
                        Password:
                        <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                        <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
                      </label>
                      <div>
                        <Lock style={{ color: "#21465b" }}/>
                        <input
                          type="password"
                          id="password"
                          onChange={(e) => setPwd(e.target.value)}
                          value={pwd}
                          required
                          aria-invalid={validPwd ? "false" : "true"}
                          aria-describedby="pwdnote"
                          onFocus={() => setPwdFocus(true)}
                          onBlur={() => setPwdFocus(false)} />
                      </div>
                      <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                          <FontAwesomeIcon icon={faInfoCircle} />
                          <div>
                            8 to 24 characters. <br />
                            Must include uppercase and lowercase letters, a number and a special character. <br />
                            Allowed special characters: !@#$%
                          </div>
                      </p>

                      <label htmlFor="confirm_pwd">
                        Confirm Password:
                        <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                        <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
                      </label>
                      <div>

                        <Lock style={{ color: "#21465b" }}/>
                        <input
                          type="password"
                          id="confirm_pwd"
                          onChange={(e) => setMatchPwd(e.target.value)}
                          value={matchPwd}
                          required
                          aria-invalid={validMatch ? "false" : "true"}
                          aria-describedby="confirmnote"
                          onFocus={() => setMatchFocus(true)}
                          onBlur={() => setMatchFocus(false)}
                        />
                      </div>
                      <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        Must match the first password input field.
                      </p>

                      <button disabled={!validName || !validPwd || !validMatch ? true : false}>Register</button>
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
    </div>
  )
}

export default Register