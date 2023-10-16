import React from "react";
import "./index.css";
import htmlIcon from "../../assets/htmlIcon.png";
import CSSIcon from "../../assets/CSSIcon.png";
import javascriptIcon from "../../assets/javascriptIcon.png";
import solidityIcon from "../../assets/solidityIcon.png";
import typescriptIcon from "../../assets/typescriptIcon.png";
import reactIcon from "../../assets/reactIcon.png";
import firebaseIcon from "../../assets/firebaseIcon.png";
import nodejsIcon from "../../assets/nodejsIcon.png";

const Skills = () => {
  const skillsList = [
    {
      name: "React",
      icon: reactIcon,
      description:
        "Building dynamic and responsive user interfaces with React.",
    },
    {
      name: "JavaScript",
      icon: javascriptIcon,
      description: "Programming interactive and feature-rich web applications.",
    },
    {
      name: "TypeScript",
      icon: typescriptIcon,
      description: "Type-safe JavaScript for robust and maintainable code.",
    },
    {
      name: "CSS",
      icon: CSSIcon,
      description: "Creating visually appealing and responsive web designs.",
    },
    {
      name: "HTML",
      icon: htmlIcon,
      description: "Markup language for structuring web content.",
    },
    {
      name: "Solidity",
      icon: solidityIcon,
      description: "Smart contract development for blockchain applications.",
    },
    {
      name: "Node.js",
      icon: nodejsIcon,
      description: "Server-side JavaScript for scalable web applications.",
    },
    {
      name: "Firebase",
      icon: firebaseIcon,
      description: "Cloud-based development platform for web and mobile apps.",
    },
  ];

  return (
    <div className="skillsContainer">
      <ul className="skillsList">
        {skillsList.map((skill, index) => (
          <li key={index}>
            <img src={skill.icon} alt="icon" className="images" />
            <div>
              <h2>{skill.name}</h2>
              <p>{skill.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
