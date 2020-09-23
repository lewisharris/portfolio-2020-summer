import React from "react";

import H1 from "./styledcomponents/H1";
import H3 from "./styledcomponents/H3";
import Button from "./styledcomponents/Button";
import Section from "./styledcomponents/Section";
import MouseIcon from "./styledcomponents/MouseIcon";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const LandingContainer = styled(animated.div)`
  height: 100vh;
  width: 100vw;
`;

const LandingPage = () => {
  const springStyle = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <LandingContainer style={springStyle}>
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
    </LandingContainer>
  );
};

export default LandingPage;
