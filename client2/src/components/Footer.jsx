import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer>
      <div className="container footer_container">
        <article>
          <Link to="/">
            <h1>E-ticket</h1>
          </Link>
          <p>
            Save your priceless time. Get your ticket online.
          </p>
          <div className="footer_socials">
            <a href="https://github.com" target="_blank" rel="noreferrer noopener"><FaGithub/></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer noopener"><FaLinkedin/></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer noopener"><FaFacebookF/></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer noopener"><FaTwitter/></a>
          </div>
        </article>
        <article>
          <h2>Permalinks</h2>
          <Link to='/fixtures' style={{fontSize:"1.2rem", fontWeight:"bold"}}>Fixtures</Link>
          <Link to='/about' style={{fontSize:"1.2rem", fontWeight:"bold"}}>About</Link>
          <Link to='/contact' style={{fontSize:"1.2rem", fontWeight:"bold"}}>Contact</Link>
        </article>
        <article>
          <h2>Get In Touch</h2>
          <Link to='/contact' style={{fontSize:"1.2rem", fontWeight:"bold"}}>Contact</Link>
          <Link to='/s' style={{fontSize:"1.2rem", fontWeight:"bold"}}>Support</Link>
        </article>
      </div>
      <div className="footer_copyright">
        <small>2023 E-ticket &copy; All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer