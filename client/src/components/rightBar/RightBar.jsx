import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import React from 'react'
import "./rightBar.scss"

const RightBar = () => {
  return (
    <div>
      <div className='rightBar'>
        <div className="rightBarWrapper">
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
          <div className="event">
            <span>Suggested for you</span>
            <div className="item">
              <div className="desc">
                <p>
                  Adama FC vs Fasil FC
                  <br />
                  <LocationOnOutlinedIcon style={{height: "15px"}}/> AA Stadium <CalendarMonthIcon style={{height: "15px"}}/>23 June 2023
                </p>
              </div>
            </div>
            <span>Latest Activities</span>
            <div className="item">
              <div className="desc">
                <p>
                  Coming Soon
                </p>
              </div>
            </div>
            <div className="item">
              <div className="desc">
                <p>
                  Hot News
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightBar;
