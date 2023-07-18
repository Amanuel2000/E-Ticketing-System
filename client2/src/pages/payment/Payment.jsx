import "./payment.css";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useState } from "react";

const Payment = () => {

  // Payment methods dropdown
  const payOptions = [
    "telebirr",
    "CBEbirr",
    "HelloCash",
    "Amole"
  ];

  // Order number
  function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let randomString = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
    }

    return randomString;
  }

  // Usage example
  const randomString = generateRandomString(10);
  // console.log(randomString);

  // copy order numbers
  const [text, setText] = useState('');

  const inputHandler = event => {
    setText(event.target.value);
  }

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    alert('copied');
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
            <form className="form-row">
              <label htmlFor="">Order Number</label>
              <input type="text" value={randomString} onChange={inputHandler} />
              <button className="copy-btn" onClick={copy} disabled={!text}>Copy the order number</button>

              <div>
                <label htmlFor="">Select Payment Method</label>
                <select name="" id="">
                    {
                      payOptions.map(pay => {
                        return <option>{pay}</option>
                      })
                    }
                  </select>
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
