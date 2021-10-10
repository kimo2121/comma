import React from "react";
import "./distractedIntro.css";
import introFrame from "../../assets/introFrame.png";
import intro from "../../assets/intro.png";

const DistractedIntro: React.FC = () => {
  return (
    <div className="distracted-intro">
      <img className="distracted-intro-frame" src={intro} alt="" />
      <img className="distracted-frame" src={introFrame} alt="" />
      <div>
        <h1>
          Established Fact that a <br /> reader will be distracted
        </h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected from
          humour, or randomised words which don't look even slightly believae.
          If you are going to use a passage of Lorem Ipsum, you
        </p>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected from
          humour, or randomised words which don't look even slightly believae.
          If you are going to use a passage of Lorem Ipsum, you
        </p>
      </div>
    </div>
  );
};

export default DistractedIntro;
