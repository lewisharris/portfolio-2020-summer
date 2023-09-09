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

const SubHeading = styled(animated.div)`
  color: #f5f5f5;
  font-size: ${props => {
    return props.small ? "16px" : "24px";
  }};
  padding-bottom: 6px;
`;

const LandingPage = () => {
  const h1Ref = useRef(null);
  const SubHeadingRef = useRef(null);
  const SubHeading2Ref = useRef(null);
  const buttonRef = useRef(null);
  const mouseIconRef = useRef(null);

  useEffect(() => {
    gsapAnim(h1Ref, 2, 0);
    gsapAnim(SubHeadingRef, 2.4, 0.2);
    gsapAnim(SubHeading2Ref, 2.4, 0.4);
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
          <SubHeading ref={SubHeadingRef}>Software Engineer</SubHeading>
          <SubHeading ref={SubHeading2Ref} small>
            London, UK
          </SubHeading>
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
