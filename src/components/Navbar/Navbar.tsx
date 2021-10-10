import React from "react";
import { Link } from "react-scroll";
import "./navbar.css";
import { ReactComponent as Menu } from "../../assets/menu.svg";
import { ReactComponent as Close } from "../../assets/close.svg";
const Navbar: React.FC = () => {
  const [state, setstate] = React.useState(false);
  const showMenu = () => {
    setstate(!state);
  };
  console.log(state);
  return (
    <div className="navbar">
      <div>Logo</div>
      <div className="web-nav">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Roadmap</Link>
        <Link to="/">Features</Link>
        <Link to="/">Contact Us</Link>
      </div>
      <button className="nav-button">Connect</button>
      <div className="mob-container">
        <button className="mob-button">Connect</button>
        <Menu onClick={showMenu} className="menu-icon" />
        <div className={state ? "slide-menu active" : "slide-menu"}>
          <Close onClick={showMenu} className="cancel-icon" />
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/">Roadmap</Link>
          <Link to="/">Features</Link>
          <Link to="/">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
