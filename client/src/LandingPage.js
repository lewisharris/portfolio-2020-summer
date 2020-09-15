import React from "react";
import H1 from "./styledcomponents/H1";
import H3 from "./styledcomponents/H3";
import Button from "./styledcomponents/Button";
import Section from "./styledcomponents/Section";
import MouseIcon from "./styledcomponents/MouseIcon";

const landingStyle = {
  height: "100vh",
  width: "100vw",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start"
};

const LandingPage = () => {
  return (
    <div style={landingStyle}>
      <div>
        <Section landing>
          <H1>Lewis Harris</H1>
          <H3 light>Creative Web Developer based in London,UK</H3>
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
