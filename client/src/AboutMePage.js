import React from "react";
import styled from "styled-components";
import H2 from "./styledcomponents/H2";
import Section from "./styledcomponents/Section";
import H3 from "./styledcomponents/H3";
import H5 from "./styledcomponents/H5";
import P from "./styledcomponents/P";
import Button from "./styledcomponents/Button";

const AboutMe = styled.div`
  background: #2a2a2a;
  padding: 10px 0px;
  color: #fff;
  position: relative;
  z-index: 1;
  margin-bottom: 50px;

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

const SkillsContainer = styled.div`
  margin-top: 80px;
  margin-left: 5vw;
`;

const AboutMePage = () => {
  return (
    <AboutMe id="about">
      <Section>
        <H2>About.</H2>
        <H3 light>
          Design Engineer turned web developer with a passion for design and
          development.
        </H3>
        <P weight={200}>
          Creative web developer with proven passion for technology and over one
          years experience building websites and web apps. I have over 6 years
          of experience within design and engineering in an agile environment
          the automotive industry In which I have contributed to engineering
          some of the most cutting edge and iconic automotive projects of the
          decade.
        </P>
        <SkillsContainer>
          <H5 light>Front end</H5>
          <P weight={200}>
            React, Redux, GraphQL, Javascript, Sass, CSS3, HTML5
          </P>
          <H5 light>Back end</H5>
          <P weight={200}>GraphQL, Express, MongoDB, NodeJS</P>
          <H5 light>Design</H5>
          <P weight={200}>XD, Illustrator, Photoshop</P>
          <Button>View Digital Resume</Button>
        </SkillsContainer>
      </Section>
    </AboutMe>
  );
};

export default AboutMePage;
