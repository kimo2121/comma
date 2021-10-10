import React from "react";
import "./footer.css";
import Twitter from "../../assets/Twitter.png";
import Youtube from "../../assets/Youtube.png";
import Dribbble from "../../assets/Dribbble.png";
import Instagram from "../../assets/Instagram.png";
const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer-zero">
        <h2>Logo</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
          unde enim commodi deserunt! Doloribus voluptatem sit quisquam nemo.
        </p>
        <div className="footer-first">
          <a href="/">
            <img src={Instagram} alt="" />
          </a>
          <a href="/">
            <img src={Dribbble} alt="" />
          </a>
          <a href="/">
            <img src={Twitter} alt="" />
          </a>
          <a href="/">
            <img src={Youtube} alt="" />
          </a>
        </div>
      </div>
      <div className="footer-second">
        <h2>About Us</h2>
        <p>Support Center</p>
        <p>About Us</p>
        <p>Copyright</p>
        <p>Popular Campaign</p>
      </div>
      <div className="footer-third">
        <h2>Our Information</h2>
        <p>Return Policy</p>
        <p>Privacy Policy</p>
        <p>Terms & Conditions</p>
        <p>Site Map</p>
        <p>Store Hours</p>
      </div>
      <div className="footer-forth">
        <h2>Policy</h2>
        <p>Application security</p>
        <p>Softwre principles</p>
        <p>Unwanted software</p>
        <p>policy</p>
        <p>supply chain</p>
      </div>
    </div>
  );
};

export default Footer;
