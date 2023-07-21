import "./generateQRC.css"
import QRCode from 'qrcode'
import { useState } from 'react'
import { fixtures } from '../../data'
const GenerateQRC = () => {

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


  const [url, setUrl] = useState('')
	const [qr, setQr] = useState('')

	const GenerateQRCode = () => {
		QRCode.toDataURL(url, {
			width: 10,
			margin: 2,
			color: {
				dark: '#335383FF',
				light: '#EEEEEEFF'
			}
		}, (err, url) => {
			if (err) return console.error(err)
			setQr(url)
		})
	}


  return (
    <div>
      <div className="generateQRC">
        <div className="gen-container">
          <h1>Your QR Code</h1>

          <div className="card-warn">
            <h2>Warning!</h2>
            <p>Do not share the QR Code with others. After you download it and save it in a safe place. <b>Remember</b>, this is your ticket to watch the game in the stadium.</p>
          </div>
          <div className="order-number">
            <form className="form-row">
              <label htmlFor="">Your Confirmation Number is: </label>
              <input type="text" value={"CONF2023-" + randomString} />
            </form>
          </div>

          <div className="card-qrc">
            <div className="details">
              <p style={{fontSize:"1.2rem"}}><b>Your Ticket Details</b></p>
              <br />
              <span><b>Match:</b> {fixtures[1].team1} vs {fixtures[1].team2}</span>
              <br />
              <span><b>Date:</b> {fixtures[1].Date}</span>
              <br />
              <span><b>Time:</b> {fixtures[1].time}</span>
              <br />
              <span><b>Total Price:</b> {fixtures[1].price}</span>
              <br />
              <span><b>Stadium:</b> {fixtures[1].stadium}</span>
              <br />
              <span>Ticket Number: <b>{"QRC2023-" + randomString}</b></span>
            </div>
            <div className="qrc">
              <input
                type="text"
                placeholder="Paste your ticket number here"
                value={url}
                onChange={e => setUrl(e.target.value)} />
              <button onClick={GenerateQRCode}  className="gen-btn">Get my QRCode</button>
              <div className="gen-qrc">
                {qr && <>
                  <img src={qr} alt="QR Code"/>
                  <a href={qr} download="qrcode.png">Download</a>
                </>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
export default GenerateQRC;
