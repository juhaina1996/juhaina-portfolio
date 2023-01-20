import React from "react";
import myImage from "../../assets/MyImage.jpeg";
import "./index.css";
export const home = () => {
  return (
    <div className="IntroContainer">
      <div className="imageContainer">
        <img src={myImage} alt="profile" className="myProfile" />
      </div>
      <div className="introductionContain">
        <div>SOFWARE ENGINEER</div>
        <div className="description">
          I am a highly skilled software developer with over 3 years of
          experience in the field. My expertise lies in developing and
          maintaining web and mobile applications using a variety of programming
          languages and frameworks.
        </div>
        <button className="cvDownloadButton">Download CV</button>
      </div>
    </div>
  );
};
export default home;
