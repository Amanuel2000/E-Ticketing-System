import { Link, NavLink } from 'react-router-dom'
import './navbar.css'
import Logo from '../images/logo.png'
import { links } from '../data.js'
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';


const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);

  return (
    <nav>
      <div className="container nav_container">
        <Link to='/' className="logo" onClick={() => setIsNavShowing(false)}>
          <img src={Logo} alt="Nav Logo" />
        </Link>
        <ul className={`nav_links ${isNavShowing ? 'show_Nav' : 'hide_Nav'}`}>
          {
            links.map(({name, path}, index) => {
              return (
                <li key={index}>
                  <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : ''} onClick={() => setIsNavShowing (prev => !prev)}>{name}</NavLink>
                </li>
              )
            })
          }
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