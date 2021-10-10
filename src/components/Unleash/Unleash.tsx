import React from "react";
import "./unleash.css";
import flat from "../../assets/flat.png";
import maskMan from "../../assets/maskMan.png";

const Unleash: React.FC = () => {
  return (
    <div className="unleash">
      <div className="unleash-left">
        <p className="span-fire">
          <img src={flat} alt="" /> FUTURE OF Frame
        </p>
        <h1>
          Unleash the Next <br />
          Generation of <br />
          Frame
        </h1>
        <span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
        </span>
        <span>numquam magni perferendis quaerat qui ratione.</span>
        <br />
        <button>Explore More</button>
      </div>
      <div>
        <img className="mask-man" src={maskMan} alt="" />
      </div>
    </div>
  );
};

export default Unleash;
