import React from "react";
import "./header.css";

interface header {
  className?: string;
  text?: string;
}
const Header: React.FC<header> = ({ className, text }) => {
  return <h1 className="general-h1">{text}</h1>;
};

export default Header;
