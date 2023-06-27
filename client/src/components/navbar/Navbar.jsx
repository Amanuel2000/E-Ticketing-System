import { SearchOutlined } from "@mui/icons-material";
import "./navbar.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <div>
          <NavLink to="/" className="nav-link">E-ticket</NavLink>
        </div>
      </div>
      <div className="center">
        <div className="search">
          <input type="text" placeholder="Search football match..." />
          <SearchOutlined style={{ cursor: "pointer" }}/>
        </div>
      </div>
      <div className="right">
        <div className="nav">
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="fixtures" className="nav-link">Fixtures</NavLink>
          <NavLink to="about" className="nav-link">About Us</NavLink>
          <NavLink to="contact" className="nav-link">Contact Us</NavLink>
          <NavLink to="profile" className="nav-link">
            <img
            src="https://images.pexels.com/photos/322819/pexels-photo-322819.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            />
            Aman F.
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
