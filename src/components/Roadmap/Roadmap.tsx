import React from "react";
import "./roadmap.css";
import roadmap from "../../assets/roadmap.png";
import Header from "../Header/Header";
const RoadMap: React.FC = () => {
  return (
    <div id="RoadMap" className="road-map">
      <Header text="Roadmap" />
      <p>
        There are many variations of passages of Lorem Ipsum available,
        <br /> but the majority have suffered alteration in some form
      </p>
      <div className="vertical-time-line">
        <div className="inner-line left">
          <div style={{ display: "flex" }}>
            <div className="line-detail left">
              <div className="map-detail">
                <span>01</span>
                <h2>Launch Roadmap</h2>
              </div>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div className="line-detail left">
              <div className="map-detail">
                <span>02</span>
                <h2>Launch Roadmap</h2>
              </div>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div className="line-detail left">
              <div className="map-detail">
                <span>03</span>
                <h2>Launch Roadmap</h2>
              </div>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
            </div>
          </div>
        </div>
        <div className="vertical-road-line">
          <img src={roadmap} alt="" />
        </div>
        <div className="inner-line right">
          <div style={{ display: "flex", width: "100%" }}>
            <div className="line-detail right">
              <div className="map-detail">
                <span>04</span>
                <h2>Launch Roadmap</h2>
              </div>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div className="line-detail right">
              <div className="map-detail">
                <span>05</span>
                <h2>Launch Roadmap</h2>
              </div>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
