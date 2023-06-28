import React from 'react'
import "./home.scss"
import Payment from '../../components/payment/Payment'
import Ticket from '../../components/ticket/Ticket'
import PaymentMethod from '../../components/paymentMethod/PaymentMethod'

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="header-text">
          <h1>Welcome <span>E-ticket</span></h1>
          <p>Get all football matches tickets here...</p>
          <button>Get Started</button>
        </div>
      </div>
      <div className="container2">
        <div className="how-it-work">
          <h1>How it works</h1>
          <div>
            <p>Select your favorite match here...</p>
            <button>Favorite Match</button>
          </div>
          <div>
            <p>Get your ticket...</p>
            <button>Get Ticket</button>
          </div>
          <div>
            <p>Go to payment your ticket...</p>
            <button>Go to payment</button>
          </div>
          <div>
            <p>Get your QRCode...</p>
            <button>Generate your QRCode</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home
