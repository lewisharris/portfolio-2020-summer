import React from "react";
import styled from "styled-components";
import H2 from "./styledcomponents/H2";
import Section from "./styledcomponents/Section";
import H3 from "./styledcomponents/H3";

const AboutMe = styled.div`
  background: #2a2a2a;
  padding: 10px 0px;
  color: #fff;
  position: relative;
  z-index: 1;

  :before {
    background: inherit;
    top: 0;
    content: "";
    display: block;
    height: 50%;
    left: 0;
    position: absolute;
    right: 0;
    transform: skewY(-2deg);
    transform-origin: 0%;
    z-index: -1;
  }
  :after {
    background: inherit;
    bottom: 0;
    content: "";
    display: block;
    height: 50%;
    left: 0;
    position: absolute;
    right: 0;
    transform: skewY(-2deg);
    transform-origin: 100%;
    z-index: -1;
  }
`;

const AboutMePage = () => {
  return (
    <AboutMe>
      <Section>
        <H2>About Me</H2>
        <H3>Design Engineer turned web developer.</H3>
      </Section>
    </AboutMe>
  );
};

export default AboutMePage;
