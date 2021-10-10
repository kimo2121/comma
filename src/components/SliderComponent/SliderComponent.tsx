import React from "react";
import Slider from "react-slick";
import "./SliderComponent.css";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import first from "../../assets/first.png";
import second from "../../assets/second.png";
import third from "../../assets/third.png";
import fourth from "../../assets/fourth.png";
import fifth from "../../assets/fifth.png";
import Header from "../Header/Header";

const data1: Array<string> = [
  first,
  second,
  third,
  fourth,
  fifth,
  first,
  second,
  third,
  fourth,
  fifth,
];

const SliderComponent: React.FC = () => {
  const NextArrow = (onClick: any) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <HiOutlineArrowNarrowRight className="right-direction" />
      </div>
    );
  };
  const PrevArrow = (onClick: any) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <HiOutlineArrowNarrowLeft className="left-direction" />
      </div>
    );
  };
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1550,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
        },
      },
      {
        breakpoint: 950,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-component">
      <div className="slider-container">
        <Header text="Established fact that" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quis
        </p>
        <p>
          consectetur veritatis numquam libero culpa eveniet modi tempora earum?
        </p>
      </div>
      <Slider className="slider-component" {...settings}>
        {data1?.map((i, indx) => (
          <div className="each-slide" key={indx}>
            <img src={i} alt="SilverCard" />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default SliderComponent;
