import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import React from 'react'
import "./rightBar.scss"

const RightBar = () => {
  return (
    <div className='rightBar'>
      <div className="container">
        <span style={{textAlign:"center"}}>Suggested for you</span>
        <div className="item">
          <div className="desc">
            <span><LocationOnOutlinedIcon style={{height: "15px"}}/> AA Stadium </span>
            <span><CalendarMonthIcon style={{height: "15px"}}/> 23 June 2023 </span>
          </div>
          <div className="team1">
            <div className="teamInfo">
              <span>BDK</span>
              <img src= "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt='' />
            </div>
            <div className="time">
              <span><AccessTimeOutlinedIcon style={{height: "15px"}}/>  15:00</span>
            </div>
          </div>
          <div className="team2">
            <div className="teamInfo">
              <img src= "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt='' />
              <span>FAK</span>
            </div>
          </div>
          <div className='butoons'>
            <button style={{ disply: "flex", border:"none" , alignItems: "center", cursor:"pointer", backgroundColor:"#5271ff", color: "white"}} >Request Ticket</button>
          </div>
          <div className="desc">
            <span><LocationOnOutlinedIcon style={{height: "15px"}}/> AA Stadium </span>
            <span><CalendarMonthIcon style={{height: "15px"}}/> 23 June 2023 </span>
          </div>
          <div className="team1">
            <div className="teamInfo">
              <span>BDK</span>
              <img src= "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt='' />
            </div>
            <div className="time">
              <span><AccessTimeOutlinedIcon style={{height: "15px"}}/>  15:00</span>
            </div>
            <div className="team2">
              <div className="teamInfo">
              <img src= "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt='' />
              <span>FAK</span>
            </div>
            </div>
          </div>
        <div className='butoons'>
          <button style={{ disply: "flex", border:"none" , alignItems: "center", cursor:"pointer", backgroundColor:"#5271ff", color: "white"}} >Request Ticket</button>
        </div>
        </div>
      <span>Latest Activities</span>
        <div className="item">
          <span>Latest Activities</span>
        </div>

        <div className="item">
          <p>
            <span>Coming Soon</span> 
           
         </p>
        </div>
        <div className="item">
          <p>
            <span>Hot News</span>
        </p>
        </div>
        <div className="item">
          <span>Hot News</span>
        </div>
      </div>
    </div>
  )
}

export default RightBar
