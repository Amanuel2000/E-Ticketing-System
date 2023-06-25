import React from 'react'
import "./payment.scss"

const Payment = () => {
  return (
    <div className="payment">
      
       <h2 style={{textAlign:"center"}}>Settle Your Payment</h2>
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

export default Payment
