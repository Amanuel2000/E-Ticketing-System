import "./ticket.css"
import Select from "react-select";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Ticket = () => {
  const payOptions = [
    {value: "VIP 200ETB", label: "VIP 200ETB"},
    {value: "Standard 100ETB", label: "Standard 100ETB"},
    {value: "Semi 50ETB", label: "Semi 50ETB"},
    {value: "Ordinary 20ETB", label: "Ordinary 20ETB"},
  ];

  const numOptions = [
    {value: "1", label: "1"},
    {value: "2", label: "2"},
    {value: "3", label: "3"},
    {value: "4", label: "4"},
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
            <form method="POST">
              <div className="form-row">
                <label>Select Ticket Type and Price</label>
                <Select options={payOptions} />
              </div>
              <div className="form-row">
                <label htmlFor="">Number of Applicants</label>
                <Select options={numOptions} />
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
