import styled from "styled-components";
import React from "react";

const Container = styled.div`
  position: absolute;
  top: 60px;
  right: 30px;
  cursor: pointer;
`;

const Layer = styled.div`
  width: 20px;
  height: 2px;
  background: white;
  margin: 5px;
`;

const HamburgerIcon = props => {
  return (
    <Container onClick={() => props.toggle()}>
      <Layer />
      <Layer />
      <Layer />
    </Container>
  );
};

export default HamburgerIcon;
