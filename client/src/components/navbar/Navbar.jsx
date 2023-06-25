import React from 'react'
 
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { Link } from 'react-router-dom';
import "./navbar.scss"

const Navbar = () => {
  return (
    <div className='navbar'>
          <div className='left'>
              <Link to="/" style={{textDecoration:"none"}}>
                  <span>E-Ticketing</span>
              </Link>
              
              <div className="navmenu">
                  <span>Home</span>
                  <span>Fixtures</span>
                  <span>Request Ticket</span>
                  <span>About</span>
            </div>
              <div className='search'>
                  <SearchOutlinedIcon />
                  <input type="text" placeholder='Search...'/>
              </div>
               
          </div>        
          <div className='right'>
              <PersonOutlinedIcon />
              <EmailOutlinedIcon />
              <NotificationsOutlinedIcon />
              <div className='user'>
                  <img src= "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt='' />
                  <span>Jhon Doe</span>

              </div>
          </div>  
      
    </div>
  )
}

export default Navbar
