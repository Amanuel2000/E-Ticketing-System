import "./generateQRC.css"
import QRCode from 'qrcode'
import { useState } from 'react'

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
              <input type="text" value={"CONF2023" + randomString} />
            </form>
          </div>

          <div className="card-qrc">
            <div className="details">
              <h3>Your Ticket Details</h3>
              <br />
              <span>Match: <big>Hawassa vs Adama </big></span>
              <span>Date: <big>25 Aug 2023</big></span>
              <span>Time: <big> 12:00 PM </big></span>
              <span>Type: <big>Premiear League</big></span>
              <span>Total Price: <big>ETB 500 </big> </span>
              <span>Ticket Number: <big>{"QRC2023" + randomString}  </big> </span>
            </div>
            <div className="qrc">
              <input
                type="text"
                placeholder="Paste your ticket number here to get your QR Code "
                value={url}
                onChange={e => setUrl(e.target.value)} />
              <button onClick={GenerateQRCode}  className="gen-btn">Get my QRCode</button>
              <div className="gen-qrc">
                {qr && <>
                  <img src={qr} />
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
