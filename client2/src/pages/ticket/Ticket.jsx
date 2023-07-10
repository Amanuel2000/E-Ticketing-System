import "./ticket.css"
import Dropdown from '../../components/dropdown/Dropdown-ticket';
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Ticket = () => {
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
            <form method="POST">
              <div className="form-row">
                <label>Select Ticket Type and Price</label>
                <Dropdown />
              </div>
              <div className="form-row">
                <label htmlFor="">Number of Applicants</label>
                <Dropdown />
              </div>
              <div className="form-row">
                <label htmlFor="">Total Price</label>
                <p>400ETB</p>
              </div>
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
