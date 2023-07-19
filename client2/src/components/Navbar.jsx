import { Link, NavLink } from 'react-router-dom'
import './navbar.css'
import Logo from '../images/logo.png'
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { useState, useContext } from 'react';
import { AuthContext } from "../context/authContext";


const Navbar = () => {
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
          <li>
            <NavLink to="/login" className={({isActive}) => isActive ? 'active-nav' : ''} onClick={() => setIsNavShowing (prev => !prev)}>Logout <PersonOutlinedIcon style={{paddingTop: "5px 0", margin: "0 10px", borderRadius: "50%", background: "lightblue"}}/><span>Aman</span></NavLink>
          </li>
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