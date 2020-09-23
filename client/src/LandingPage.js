import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

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
  const h1Ref = useRef(null);
  const h3Ref = useRef(null);
  const buttonRef = useRef(null);
  const mouseIconRef = useRef(null);

  useEffect(() => {
    gsapAnim(h1Ref, 2, 0);
    gsapAnim(h3Ref, 1.7, 0.3);
    gsapAnim(buttonRef, 1.5, 0.5);
    gsapAnim(mouseIconRef, 1.3, 0.7);
  }, []);

  const gsapAnim = (ref, duration, delay) => {
    gsap.from(ref.current, {
      duration: duration,
      translateX: "-5%",
      opacity: 0,
      ease: "ease-in-out",
      delay: delay
    });
    gsap.to(ref.current, {
      duration: duration,
      translateX: "0%",
      opacity: 1,
      ease: "ease-in-out",
      delay: delay
    });
  };
  const springStyle = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <LandingContainer style={springStyle}>
      <div>
        <Section landing>
          <H1 ref={h1Ref}>Lewis Harris</H1>
          <H3 ref={h3Ref} light>
            Creative Web Developer based in London,UK
          </H3>
          <Button ref={buttonRef}>
            <a href="#projects">Explore Projects</a>
          </Button>
        </Section>
        <MouseIcon ref={mouseIconRef} />
      </div>
    </LandingContainer>
  );
};

export default LandingPage;
