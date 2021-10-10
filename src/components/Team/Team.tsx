import React from "react";
import "./team.css";
import member1 from "../../assets/member1.png";
import member2 from "../../assets/member2.png";
import member3 from "../../assets/member3.png";

import EachMembmer from "./EachMembmer";

interface teamMembers {
  members: {
    img?: string;
    name?: string;
  }[];
}
const data1: teamMembers["members"] = [
  {
    img: member1,
    name: "Valentino",
  },
  {
    img: member2,
    name: "Shane",
  },
  {
    img: member3,
    name: "Abby",
  },
];
const data2: teamMembers["members"] = [
  {
    img: member1,
    name: "Valentino",
  },
  {
    img: member2,
    name: "Shane",
  },
  {
    img: member3,
    name: "Abby",
  },
];

const Team: React.FC = () => {
  return (
    <div className="team">
      <h1>Meet Our Team Members</h1>
      <p>
        There are many variations of passages of Lorem Ipsum available, but the
        <br />
        majority have suffered alteration in some form, by injected humour,
      </p>
      <div className="members">
        {data1.map((item, index) => (
          <EachMembmer item={item} index={index} />
        ))}
      </div>
      <div className="members">
        {data2.map((item, index) => (
          <EachMembmer item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Team;
