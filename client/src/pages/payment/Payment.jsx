import "./payment.scss"
import Dropdown from '../../components/dropdown/Dropdown-payment';
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";

const Payment = () => {
  return (
    <div>
      <div className="payment">
        <div className="container">
          <h1>Pay for your Ticket</h1>
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
      <Footer />
    </div>
  )
};
export default Payment;
