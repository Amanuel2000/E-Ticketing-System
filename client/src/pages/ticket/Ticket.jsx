import "./ticket.scss"
import Dropdown from '../../components/dropdown/Dropdown-ticket';
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";

const Ticket = () => {
  return (
    <div>
      <div className="ticket">
        <div className="container">
          <h1>Get your ticket</h1>
          <div className="card">
            <form method="POST">
              <div className="form-row">
                <label htmlFor="">Selected Match</label>
                <input type="text" name="selected-match" placeholder='Fasil vs Eth.Bunna on Oct 20, 2023 @ 4:00PM'/>
              </div>
              <div className="form-row">
                <label htmlFor="">Enter your name</label>
                <input type="text" name="full_name" />
              </div>
              <div className="form-row">
                <label htmlFor="">Select Price</label>
                <Dropdown />
              </div>
              <div className="form-row">
                <label htmlFor="">Number of Applicants</label>
                <input type="number" name="number_of_applicants" />
              </div>
              <div className="form-row">
                <label htmlFor="">Total Price</label>
                <input type="text" name="total-price" />
              </div>
            </form>
            <div className="btn">
              <Link to="/fixtures/ticket/payment">
                <button>Go To Payment</button>
              </Link>
              <Link to="/fixtures">
                <button>Go Back To Fixtures</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
};
export default Ticket;