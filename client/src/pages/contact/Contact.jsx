import { Facebook, GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import Footer from "../../components/footer/Footer";
import "./contact.scss"

const Contact = () => {
  return (
    <div>
      <div className="container">
        <div className="contact-left">
          <h2>Contact Us</h2>
          <div className="social-icons">
            <ul>
              <li>
                <span><Facebook style={{fontSize: "40px"}} /></span>
              </li>
              <li>
                <span><LinkedIn style={{fontSize: "40px"}} /></span>
              </li>
              <li>
                <span><GitHub style={{fontSize: "40px"}} /></span>
              </li>
              <li>
                <span><Twitter style={{fontSize: "40px"}} /></span>
              </li>
            </ul>
          </div>
        </div>
        <div className="contact-right">
          <form>
            <input
              type="text"
              name="Name"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="Email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="Message"
              rows="5"
              placeholder="Your Message"
            ></textarea>
            <button type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
};

export default Contact;
