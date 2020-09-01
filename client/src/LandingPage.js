import React from "react";
import H1 from "./styledcomponents/H1";
import H3 from "./styledcomponents/H3";
import H4 from "./styledcomponents/H4";
import NavBar from "./styledcomponents/NavBar";
import Button from "./styledcomponents/Button";
import Section from "./styledcomponents/Section";
import ParticlesContainer from "./ParticlesContainer";
import MouseIcon from "./styledcomponents/MouseIcon";

const landingStyle = {
  height: "100vh",
  width: "100vw",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center"
};
const LandingPage = () => {
  return (
    <div style={landingStyle}>
      <ParticlesContainer />
      <NavBar />
      <Section>
        <H1>Lewis Harris</H1>
        <H3>Full Stack Developer</H3>
        <H4>London, UK</H4>
        <Button>Explore Projects</Button>
      </Section>
      <MouseIcon />
    </div>
  );
};

export default LandingPage;
