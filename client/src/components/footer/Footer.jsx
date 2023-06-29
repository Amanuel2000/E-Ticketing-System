import { Link, NavLink } from 'react-router-dom'
import './footer.scss'
import { Facebook, GitHub, LinkedIn, Twitter } from '@mui/icons-material'

const Footer = () => {
  return (
    <div class="footer">
      <div class="container">
        <div className='left'>
          <Link to="/" style={{fontSize: "20px", color: "#fff", textDecoration: "none"}}><h1>E-ticket</h1></Link>
          <p>Copyright &copy; 2023</p>
        </div>
        <div className="center">
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="fixtures" className="nav-link">Fixtures</NavLink>
          <NavLink to="about" className="nav-link">About Us</NavLink>
          <NavLink to="contact" className="nav-link">Contact Us</NavLink>
        </div>
        <div class="right">
          <a href="www.github.com"><GitHub style={{ fontSize: "40px", color: "#fff", margin: "10px" }}/></a>
          <a href="ww.facebook.com"><Facebook style={{ fontSize: "40px", color: "#fff", margin: "10px"}}/></a>
          <a href="www.linkedin.com"><LinkedIn style={{ fontSize: "40px", color: "#fff", margin: "10px" }}/></a>
          <a href="www.twitter.com"><Twitter style={{ fontSize: "40px", color: "#fff", margin: "10px" }}/></a>
        </div>
      </div>
    </div>
  )
}
export default Footer;