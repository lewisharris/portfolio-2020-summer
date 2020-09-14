import React from "react";
import styled from "styled-components";
import CardButton from "./CardButton";

const Container = styled.div`
  box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.2);
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  background: ${props => props.theme.bg};
  box-sizing: border-box;
  padding: 20px;
  color: ${props => props.theme.darkText};
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
  max-width: 600px;
  margin: 10px auto;
`;

const Card = props => {
  return (
    <Container displayType={props.displayType}>
      <H3>{props.details.name}</H3>
      <LanguagesText>{props.details.technology}</LanguagesText>
      {props.displayType === "Grid" ? (
        <Img src={props.details.image} alt={props.details.image}></Img>
      ) : null}

      <MainText>{props.details.description}</MainText>
      <ButtonFlexBox>
        <CardButton color="#11C765" link={props.details.demo}>
          Demo
        </CardButton>
        <CardButton color="#409CBE" link={props.details.code}>
          Code
        </CardButton>
        <CardButton color="#E66D6B" link={props.details.design}>
          Design
        </CardButton>
      </ButtonFlexBox>
    </Container>
  );
};

export default Card;
