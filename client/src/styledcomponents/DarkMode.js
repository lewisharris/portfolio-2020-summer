import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 40px;
  height: 20px;
  background: #707070;
  border-radius: 500px;
  margin-right: 10px;
  position: relative;
`;

const Circle = styled.div`
  width: 16px;
  height: 16px;
  position: absolute;
  top: 2px;
  left: 2px;
  background: #868686;
  border-radius: 50px;
  border: 2px solid #ec6d69;
  box-sizing: border-box;
  :hover {
    background: #409cbe;
  }
`;

const DarkMode = () => {
  return (
    <Container>
      <Circle></Circle>
    </Container>
  );
};

export default DarkMode;
