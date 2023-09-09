import React, { useState } from "react";
import styled from "styled-components";
import ToggleGallery from "./ToggleGallery";
import CardContainer from "./CardContainer";
import { A, ABold } from "./A";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.theme.secondaryBg};
  margin: 0px auto;
  margin-top: 80px;
  box-sizing: border-box;
`;
const Gallery = () => {
  return (
    <Container>
      <CardContainer />
      <A target="#" href="https://www.github.com/lewisharris">
        Full list of projects available on <ABold>GitHub</ABold>
      </A>
    </Container>
  );
};

export default Gallery;
