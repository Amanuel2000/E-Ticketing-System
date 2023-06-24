import { SearchOutlined } from "@mui/icons-material";
import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>E-ticket</span>
        </Link>
      </div>
      <div className="center">
        <div className="search">
          <input type="text" placeholder="Search football match..." />
          <SearchOutlined style={{ cursor: "pointer" }}/>
        </div>
      </div>
      <div className="right">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Home</span>
        </Link>
        <Link to="/fixtures" style={{ textDecoration: "none" }}>
          <span>Fixtures</span>
        </Link>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <span>About</span>
        </Link>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <span>Contact Us</span>
        </Link>
        <div className="user">
          <img
            src="https://images.pexels.com/photos/322819/pexels-photo-322819.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <span>Aman F.</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
