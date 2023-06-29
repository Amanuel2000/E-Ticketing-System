import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import React from 'react'
import "./rightBar.scss"

const RightBar = () => {
  return (
    <div className='rightBar'>
      <div className="container">
        <div className="card">
          <button style={{backgroundColor: "rgba(153, 38, 240, 0.45)", textAlign: "center"}}>All Ethiopian Premier League Teams</button>
          <button>Fasil</button>
          <button>Giorges</button>
          <button>Ethiopian Bunna</button>
          <button>Bahir Dar</button>
          <button>Hawassa</button>
          <button>Adama</button>
          <button>Wolkite</button>
          <button>Dire Dawa</button>
          <button className="sidebarButton">See More...</button>
        </div>
        <span style={{textAlign:"center"}}>Suggested for you</span>
        <div className="item">
          <div className="desc">
            <span><LocationOnOutlinedIcon style={{height: "15px"}}/> AA Stadium </span>
            <span><CalendarMonthIcon style={{height: "15px"}}/> 23 June 2023 </span>
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

export default RightBar;
