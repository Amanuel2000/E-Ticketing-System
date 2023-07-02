import React from 'react'
import "./home.scss"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="container">
          <div className="header-text">
            <h1>Welcome to <span>E-ticket</span></h1>
            <p>Get all Ethiopian Premier League Football matches tickets here...</p>
            <Link to='/login'>
              <button>Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
