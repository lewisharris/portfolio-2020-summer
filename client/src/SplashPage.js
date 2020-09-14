import styled from "styled-components";
import React from "react";
import { animated } from "react-spring";
import IntroLogo from "./IntroLogo";

const Container = styled(animated.div)`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  padding: 0px;
  margin: 0px;
  text-align: center;
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 1s ease-in-out;
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
  return (
    <Container>
      <IntroLogo count={props.count} />
      <P>lewisharris.io</P>
    </Container>
  );
};

export default Splash;
