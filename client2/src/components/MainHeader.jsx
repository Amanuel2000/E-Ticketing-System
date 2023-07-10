import { Link } from 'react-router-dom';
import Image from '../images/cover.png'

const MainHeader = () => {
  return (
    <header className="main_header">
      <div className="container main_header-container">
        <div className="main_header-left">
            <h1>Welcome to <span>E-ticket</span></h1>
            <p>Get all Ethiopian Premier League Football matches tickets here...</p>
          <Link to='/register' className='btn lg'>Get Started</Link>
        </div>
        <div className="main_header-right">
          <div className="main_header-image">
            <img src={Image} alt="Main header" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader