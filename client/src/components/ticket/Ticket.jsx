import React from 'react'
import "./ticket.scss"

const Ticket = () => {
  return (
    <div className="ticket">
      <h2 style={{textAlign:"center"}}>Requst Ticket Form</h2>
      <div className="container">
          
          <form>
           
            <input type="text" placeholder="Game Name" />
          <input type="text" placeholder="Game Type" />
           <input type="text" placeholder="Ticket Name" />
            <input type="text" placeholder="Ticket Type" />
            <button>Submit</button>
          </form>
        
      </div>

    </div>
  )
}

export default Ticket
