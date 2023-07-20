import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import React from 'react'
import { teams } from '../data';

const RightBar = () => {
  return (
    <div>
      <div className='rightBar'>
        <div className="rightBarWrapper">
          <div className="rightBar-card">
            <button style={{backgroundColor: "rgba(153, 38, 240, 0.45)", textAlign: "center"}}>All Ethiopian Premier League Teams</button>
            {
              teams.map(({id, name}) => {
                return (
                  <button key={id}>{name}</button>
                )
              })
            }
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightBar;
