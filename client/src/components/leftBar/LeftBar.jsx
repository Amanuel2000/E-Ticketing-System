import React from 'react'
import "./leftBar.scss"

const LeftBar = () => {
  return (
    <div className='leftBar'>
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src= "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt='' />
            <span>Jhon Doe</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your Shortcuts</span>
        </div>
        <div className="menu">
          <span>Your Shortcuts</span>
        </div>
        <div className="menu">
          <span>Your Shortcuts</span>
        </div>
        <div className="menu">
          <span>Your Shortcuts</span>
        </div>
      </div>
    </div>
  )
}

export default LeftBar
