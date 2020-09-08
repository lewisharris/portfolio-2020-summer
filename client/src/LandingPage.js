import React from "react";
import H1 from "./styledcomponents/H1";
import H3 from "./styledcomponents/H3";
import Button from "./styledcomponents/Button";
import Section from "./styledcomponents/Section";
import MouseIcon from "./styledcomponents/MouseIcon";
import { useSpring, animated } from "react-spring";

const landingStyle = {
  height: "100vh",
  width: "100vw",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center"
};

const LandingPage = () => {
  const isMounted = true;
  const introAnimation = useSpring(
    {
      opacity: isMounted === true ? "1" : "0"
    },
    {
      height: isMounted === true ? "100vh" : "20vh"
    }
  );
  return (
    <div style={introAnimation}>
      <div style={landingStyle}>
        <Section>
          <H1>Lewis Harris</H1>
          <H3 light>Full Stack Developer</H3>
          <Button>
            <a href="#projects">Explore Projects</a>
          </Button>
        </Section>
        <MouseIcon />
      </div>
    </div>
  );
};

export default LandingPage;
