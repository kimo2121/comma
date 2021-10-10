import React from "react";
import DistractedIntro from "../DistractedIntro/DistractedIntro";
import Footer from "../Footer/Footer";
import RoadMap from "../Roadmap/Roadmap";
import SliderComponent from "../SliderComponent/SliderComponent";
import Team from "../Team/Team";
import Unleash from "../Unleash/Unleash";
import "./home.css";
const Home: React.FC = () => {
  return (
    <div className="home">
      <Unleash />
      <DistractedIntro />
      <SliderComponent />
      <RoadMap />
      <Team />
      <Footer />
    </div>
  );
};

export default Home;
