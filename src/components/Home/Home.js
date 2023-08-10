import React from "react";
import myImage from "../../assets/MyImage.jpeg";
import "./index.css";
export const home = () => {
  const cvLink =
    "https://drive.google.com/file/d/1j5UDdzkQEnPARZQAzYJCwaP8ZY05-Fgq/view?usp=sharing";
  return (
    <div className="IntroContainer">
      <div className="imageContainer">
        <img src={myImage} alt="profile" className="myProfile" />
      </div>
      <div className="introductionContain">
        <div>SOFWARE ENGINEER</div>
        <div className="description">
          I am an experienced Software Engineer with three years of expertise in
          developing and maintaining software applications. My skillset
          encompasses programming languages such as React, HTML, CSS,
          JavaScript, and Solidity. I have a proven track record in designing
          and implementing efficient and reliable software solutions. My
          experience includes following Agile methodologies, consistently
          delivering projects on-time and within budget. I excel in
          problem-solving and analytical thinking, focusing on delivering
          high-quality and maintainable code. Additionally, I possess strong
          communication skills and thrive in collaborative environments,
          effectively working with cross-functional teams.
        </div>
        <a
          href={cvLink}
          target="_blank"
          rel="noopener noreferrer"
          className="cvDownloadButton"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};
export default home;
