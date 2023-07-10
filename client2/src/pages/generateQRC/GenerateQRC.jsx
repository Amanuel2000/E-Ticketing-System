import "./generateQRC.css"
import { Link } from "react-router-dom";

const GenerateQRC = () => {
  return (
    <div>
      <div className="generateQRC">
        <div className="gen-container">
          <h1 className="title">Your QR Code</h1>

          <div className="card-warn">
            <h2>Warning!</h2>
            <p>Do not share the QR Code with others. After you download it and save it in a safe place. <b>Remember</b>, this is your ticket to watch the game in the stadium.</p>
          </div>
          <div className="order-number">
            <form method="POST">
              <div className="form-row">
                <label htmlFor="">Enter Your Order Number</label>
                <input type="text" />
                <input type="submit" value="Submit" />
              </div>
            </form>
          </div>

          <Link to="/generateQRC">
            <button className="gen-btn">Generate QRCode</button>
          </Link>

          <div className="card-qrc">
            <div className="details">
              <p>Summary</p>
              <span>Math: </span>
              <span>Date: </span>
              <span>Time: </span>
              <span>Type: </span>
              <span>Total Price: </span>
            </div>
            <div className="qrc">
              QRCode
            </div>
          </div>
          <div className="download">
            <Link to="/download">
              <button className="gen-btn">Download</button>
            </Link>
            <Link to="/download">
              <button className="gen-btn">Print</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
};
export default GenerateQRC;
