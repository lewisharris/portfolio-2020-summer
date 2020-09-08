import styled from "styled-components";
import React from "react";
import Logo from "./images/icons/logo-intro.svg";
import { useSpring, animated } from "react-spring";

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
`;

const Img = styled.img`
  width: 20vw;
  max-width: 300px;
  margin: 0px auto;
  padding: 0px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Splash = props => {
  const introAnimation = useSpring({
    opacity: props.count > 1 ? "1" : "0"
  });
  return (
    <Container style={introAnimation}>
      <Img src={Logo} />
    </Container>
  );
};

export default Splash;
