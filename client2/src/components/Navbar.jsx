import { Link, NavLink } from 'react-router-dom'
import './navbar.css'
import Logo from '../images/logo.png'
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { useState } from 'react';
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
 

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 const navigate = useNavigate();


  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Clear user data (e.g., localStorage.clear())
    // Update authentication state (e.g., setIsLoggedIn(false))
    // Redirect to login page (e.g., history.push('/login'))

    setIsLoggedIn(false);
    localStorage.clear();
    navigate('/login');
  };
  const [isNavShowing, setIsNavShowing] = useState(false);
const { currentUser } = useContext(AuthContext);

  return (
    <nav>
      <div className="container nav_container">
        <Link to='/' className="logo" onClick={() => setIsNavShowing(false)}>
          <img src={Logo} alt="Nav Logo" />
        </Link>
        <ul className={`nav_links ${isNavShowing ? 'show_Nav' : 'hide_Nav'}`}>
          <li>
            <NavLink to="/" className={({isActive}) => isActive ? 'active-nav' : ''} onClick={() => setIsNavShowing (prev => !prev)}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/fixtures" className={({isActive}) => isActive ? 'active-nav' : ''} onClick={() => setIsNavShowing (prev => !prev)}>Fixtures</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({isActive}) => isActive ? 'active-nav' : ''} onClick={() => setIsNavShowing (prev => !prev)}>About</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({isActive}) => isActive ? 'active-nav' : ''} onClick={() => setIsNavShowing (prev => !prev)}>Contact</NavLink>
          </li>
          {isLoggedIn ? (
            <li>
               
             <NavLink to="/" className={({isActive}) => isActive ? 'active-nav' : ''} onClick={() => setIsNavShowing (prev => !prev)}> <button onClick={handleLogout}> Logout</button></NavLink>
            </li>) : (
            <li>
               
            <NavLink to="/login" className={({isActive}) => isActive ? 'active-nav' : ''}> <button onClick={handleLogin}> Login</button></NavLink>
              </li>
          )}
           {/* {isLoggedIn ? (
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        ) : (
          <li>
            <button onClick={handleLogin}>Login</button>
          </li>
        )} */}
        
          
          
        </ul>
        <button className='nav_toggle-btn' onClick={() => setIsNavShowing (prev => !prev)}>
          {
            isNavShowing ? <AiOutlineClose style={{color: "#000"}} /> : <FaBars style={{color: "#000"}} />
          }
        </button>
      </div>
    </nav>
  )
}

export default Navbar