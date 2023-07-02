import "./generateQRC.scss"
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";

const GenerateQRC = () => {
  return (
    <div>
      <div className="generateQRC">
        <div className="container">
          <h1 className="title">Your QR Code</h1>

          <div className="card-warn">
            <h3>Warning</h3>
            <p>Do not share the QR Code with others. After you download it and save it in a safe place. <b>Remember</b>, this is your ticket to watch the game in the stadium.</p>
          </div>
          <div>
            <Link to="/generateQRC">
              <button>Generate QRCode</button>
            </Link>
          </div>

          <div className="card-qrc">
            <div>
            </div>
          </div>
          <div>
            <Link to="/download">
              <button>Download</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
};
export default GenerateQRC;
