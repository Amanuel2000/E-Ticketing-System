import "./payment.css"
import Dropdown from '../../components/dropdown/Dropdown-payment';
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useState } from "react";

const Payment = () => {
  const [text, setText] = useState('');

  const inputHandler = event => {
    setText(event.target.value);
  }

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    alert('Text copied');
  }
  return (
    <div>
      <div className="payment">
        <div className="pay_container">
          <h1>Pay for your Ticket</h1>
          <div className="summary_card">
            <div className="match_summary_card">
              <h2>Selected Match Summary</h2>
              <span>Match:</span>
              <span>Date:</span>
              <span>Time:</span>
            </div>
            <div className="ticket_summary_card">
              <h2>Ticket Price Summary</h2>
              <span>Type:</span>
              <span>Total Price:</span>
            </div>
          </div>

          <div className="pay_card">
            <form method="POST">
              <div className="form-row">
                <label htmlFor="">Select Payment Method</label>
                <Dropdown />
              </div>
              <div className="form-row">
                <label htmlFor="">Order Number</label>
                <div className="ord-num">
                  <input type="text" value={text} onChange={inputHandler} />
                  <button className="copy-btn" onClick={copy} disabled={!text}>Copy</button>
                </div>
              </div>
            </form>
            <div className="pay_btn">
              <Link to="/fixtures/ticket">
                <button className="btn"><AiOutlineArrowLeft /> Go Back To Ticket Page</button>
              </Link>
              <Link to="/fixtures/ticket/payment/generate">
                <button className="btn">Generate your QRCode <AiOutlineArrowRight /></button>
              </Link>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
};
export default Payment;
