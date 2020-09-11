import styled from "styled-components";
import React from "react";
import Logo from "./images/icons/logo-intro.svg";
import { useSpring, animated } from "react-spring";
import IntroLogo from "./IntroLogo";

const Container = styled(animated.div)`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vw;
  padding: 0px;
  margin: 0px;
  text-align: center;
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const P = styled.p`
  color: white;
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 1px;
  margin: 0px;
  padding: 0px;
`;

const Splash = props => {
  const introAnimation = useSpring({
    opacity: props.count > 1 ? "1" : "0"
  });
  return (
    <Container style={introAnimation}>
      <IntroLogo />
      <P>lewisharris.io</P>
    </Container>
  );
};

export default Splash;
