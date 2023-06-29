import "./payment.scss"
import Dropdown from '../dropdown/Dropdown-payment';
import { Link, NavLink } from "react-router-dom";

const Payment = () => {
  return (
    <div className="payment">
      <div className="container">
        <h1 className="title">Pay for your Ticket</h1>
        <div className="card">
          <form method="POST">
            <div className="form-row">
              <label htmlFor="">Select Payment Method</label>
              <Dropdown />
            </div>
            <div className="form-row">
              <label htmlFor="">Phone Number</label>
              <input type="text" name="phone-number" />
            </div>
          </form>
          <div className="btn">
            <Link to="/fixtures/ticket/payment/generate">
              <button>Generate your QRCode</button>
            </Link>
            <Link to="/fixtures/ticket">
              <button>Go Back To Ticket Page</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
};
export default Payment;
