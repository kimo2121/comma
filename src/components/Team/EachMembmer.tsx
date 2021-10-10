import React from "react";
import Image from "../Image/Image";
import "./team.css";
import twitter2 from "../../assets/twitter (2).png";
import youtube2 from "../../assets/youtube (2).png";

interface types {
  item?: any;
  index?: number;
}
const EachMembmer: React.FC<types> = ({ item, index }) => {
  return (
    <div key={index}>
      <Image className="member-image" src={item.img} />
      <div className="member-contact-detail">
        <p>Lorem ipsum</p>
        <div>
          <a href="/">
            <img src={twitter2} alt="" />
          </a>
          <a href="/">
            <img src={youtube2} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default EachMembmer;
