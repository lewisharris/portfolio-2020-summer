import React from "react";
import styled from "styled-components";
import CardButton from "./CardButton";
import pushFIT from "../images/pushfit-mockup.jpg";

const Container = styled.div`
  width: ${props => {
    if (props.displayType === "Grid") {
      return "300px";
    } else {
      return "100%";
    }
  }};
  border-radius: 30px;
  box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.2);
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  background: #ffffff;
  box-sizing: border-box;
  padding: 20px;
`;
const ButtonFlexBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 15px;
`;

const LanguagesText = styled.p`
  font-style: italic;
  font-size: 12px;
  font-weight: 300;
  padding: 0px;
  margin: 5px 0px;
`;

const H3 = styled.h3`
  margin: 0px;
  font-size: 24px;
`;

const MainText = styled.p`
  margin: 10px auto;
  font-size: 14px;
  font-weight: 300;
  max-width: 700px;
`;

const Img = styled.img`
  width: 100%;
  max-width: 800px;
  margin: 10px auto;
`;

const Card = props => {
  return (
    <Container displayType={props.displayType}>
      <H3>Header</H3>
      <LanguagesText>HTML, CSS, React, Sass, NodeJS</LanguagesText>
      <Img src={pushFIT} alt="image"></Img>
      <MainText>
        According to Google, “A floating action button (FAB) performs the
        primary, or most common, action on a screen. It appears in front of all
        screen content, typically as a circular shape with an icon in its
        center.
      </MainText>
      <ButtonFlexBox>
        <CardButton color="#11C765">Demo</CardButton>
        <CardButton color="#409CBE">Code</CardButton>
        <CardButton color="#E66D6B">Design</CardButton>
      </ButtonFlexBox>
    </Container>
  );
};

export default Card;
