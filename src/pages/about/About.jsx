import React from "react";
import {
  AboutDiv,
  IconContainer,
  InfoContainer,
  ProfileImg,
} from "./About.style";

import Icon from "../../components/icon/Icon";
import { iconData } from "../../helper/iconData";
import aboutImage from "../../assets/me.jpg";

const About = () => {
  return (
    <AboutDiv>
      <ProfileImg src={aboutImage} alt="anthony" />
      <InfoContainer>
        <h2>Hi, I'm Boran</h2>
        <h3>I’m currently learning Full-Stack Development Languages.</h3>
        <h4>
          I've already known JS, ReactJS, NextJs, ReactNative, Django, NodeJS,
          MongoDB,SQL, Python, AWS Services.
        </h4>
        <h4>💬 You can ask me anything you want to know</h4>
      </InfoContainer>
      <IconContainer>
        {iconData.map((item) => (
          <a key={item.icon} href={item.href}>
            <Icon icon={item.icon} path={item.path} hoverColor={item.color} />
          </a>
        ))}
      </IconContainer>
    </AboutDiv>
  );
};

export default About;
