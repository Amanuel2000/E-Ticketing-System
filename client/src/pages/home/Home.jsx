import React from 'react'
import "./home.scss"
import Payment from '../../components/payment/Payment'
import Ticket from '../../components/ticket/Ticket'
import PaymentMethod from '../../components/paymentMethod/PaymentMethod'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="container">
          <div className="header-text">
            <h1>Welcome to <span>E-ticket</span></h1>
            <p>Get all football matches tickets here...</p>
            <button><a href='#how-it-work'>Get Started</a></button>
          </div>
        </div>
      </div>
      <div className="container2">
        <div id='how-it-work'>
          <h1>How it works</h1>
          <div className="card">
            <div>
              <p>Select your favorite match here...</p>
              <Link to="/fixtures">
                <button>All Fixtures</button>
              </Link>
            </div>
            <div>
              <p>Get your ticket...</p>
              <Link to="/ticket">
                <button>Get Ticket</button>
              </Link>
            </div>
            <div>
              <p>Go to payment...</p>
              <Link to="/payment">
                <button>Go to payment</button>
              </Link>
            </div>
            <div>
              <p>Get your QRCode...</p>
              <Link to="/generate">
                <button>Generate your QRCode</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home
