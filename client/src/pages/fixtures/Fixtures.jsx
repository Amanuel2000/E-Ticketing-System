import React from 'react'
import "./fixtures.scss"

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import RightBar from '../../components/rightBar/RightBar';
import LeftBar from '../../components/leftBar/LeftBar';
import { Link } from 'react-router-dom';


const Fixtures = () => {
  return (
    <div className='fixture-page'>
      <LeftBar />

      <div className="fixture">
        <h1>All Upcoming Fixtures</h1>
        <div className="container">
          <div className="card">
            <div className="desc">
              <span><LocationOnOutlinedIcon style={{fontSize:"15px"}}/> AA Stadium</span>
              <span><CalendarMonthIcon style={{fontSize:"15px"}}/> 23 June 2023</span>
            </div>
            <div className="team">
              <span>HAWASA KENEMA</span>
              <img src= "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt='' />
              <span><AccessTimeOutlinedIcon style={{fontSize:"15px"}}/> 15:00</span>
              <img src= "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt='' />
              <span>ADAMAN KENEMA</span>
            </div>
            <Link className="fix-btn" to="/fixtures/ticket" >
              <button>Request Ticket</button>
            </Link>
          </div>
          <div className="card">
            <div className="desc">
              <span><LocationOnOutlinedIcon style={{fontSize:"15px"}}/> AA Stadium</span>
              <span><CalendarMonthIcon style={{fontSize:"15px"}}/> 23 June 2023</span>
            </div>
            <div className="team">
              <span>HAWASA KENEMA</span>
              <img src= "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt='' />
              <span><AccessTimeOutlinedIcon style={{fontSize:"15px"}}/> 15:00</span>
              <img src= "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt='' />
              <span>ADAMAN KENEMA</span>
            </div>
            <Link className="fix-btn" to="/ticket" >
              <button>Request Ticket</button>
            </Link>
          </div>
          <div className="card">
            <div className="desc">
              <span><LocationOnOutlinedIcon style={{fontSize:"15px"}}/> AA Stadium</span>
              <span><CalendarMonthIcon style={{fontSize:"15px"}}/> 23 June 2023</span>
            </div>
            <div className="team">
              <span>HAWASA KENEMA</span>
              <img src= "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt='' />
              <span><AccessTimeOutlinedIcon style={{fontSize:"15px"}}/> 15:00</span>
              <img src= "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt='' />
              <span>ADAMAN KENEMA</span>
            </div>
            <Link className="fix-btn" to="/ticket" >
              <button>Request Ticket</button>
            </Link>
          </div>
          <div className="card">
            <div className="desc">
              <span><LocationOnOutlinedIcon style={{fontSize:"15px"}}/> AA Stadium</span>
              <span><CalendarMonthIcon style={{fontSize:"15px"}}/> 23 June 2023</span>
            </div>
            <div className="team">
              <span>HAWASA KENEMA</span>
              <img src= "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt='' />
              <span><AccessTimeOutlinedIcon style={{fontSize:"15px"}}/> 15:00</span>
              <img src= "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt='' />
              <span>ADAMAN KENEMA</span>
            </div>
            <Link className="fix-btn" to="/ticket" >
              <button>Request Ticket</button>
            </Link>
          </div>
          <div className="card">
            <div className="desc">
              <span><LocationOnOutlinedIcon style={{fontSize:"15px"}}/> AA Stadium</span>
              <span><CalendarMonthIcon style={{fontSize:"15px"}}/> 23 June 2023</span>
            </div>
            <div className="team">
              <span>HAWASA KENEMA</span>
              <img src= "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt='' />
              <span><AccessTimeOutlinedIcon style={{fontSize:"15px"}}/> 15:00</span>
              <img src= "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt='' />
              <span>ADAMAN KENEMA</span>
            </div>
            <Link className="fix-btn" to="/ticket" >
              <button>Request Ticket</button>
            </Link>
          </div>
        </div>
      </div>

      <RightBar />
    </div>
  )
}

export default Fixtures;