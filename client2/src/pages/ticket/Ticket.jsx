import "./ticket.css"
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Ticket = () => {
  const ticketOptions = [
    "VIP 200ETB",
    "Standard 100ETB",
    "Semi 50ETB",
    "Ordinary 20ETB"
  ];

  const numOptions = [
    "1",
    "2",
    "3",
    "4"
  ];

  return (
    <div>
      <div className="ticket">
        <div className="ticket_container">
          <h1>Get your ticket</h1>
          <div className="match_summary_card">
            <h2>Selected Match Summary</h2>
            <span>Match:</span>
            <span>Date:</span>
            <span>Time:</span>
          </div>
          <div className="ticket_card">
            <form className="form-row">
              <div>
                <label>Select Ticket Type and Price</label>
                <select name="" id="">
                  {
                    ticketOptions.map(ticket => {
                      return <option>{ticket}</option>
                    })
                  }
                </select>
              </div>
              
              <div>
                <label htmlFor="">Number of Applicants</label>
                <select>
                  {
                    numOptions.map(num => {
                      return <option>{num}</option>
                    })
                  }
                </select>
              </div>
              <label htmlFor="">Total Price</label>
              <p>400ETB</p>
            </form>
            <div className="ticket_btn">
              <Link to="/fixtures">
                <button className="btn"><AiOutlineArrowLeft /> Go Back To Fixtures</button>
              </Link>
              <Link to="/fixtures/ticket/payment">
                <button className="btn">Go To Payment <AiOutlineArrowRight /></button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
export default Ticket;
