import React from "react";
import styled from "styled-components";
import CardButton from "./CardButton";

const Container = styled.div`
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  flex-grow: 2;
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

const StackText = styled.p`
  font-style: italic;
  text-decoration: underline;
  font-size: 12px;
  font-weight: 300;
  padding: 0px;
  margin: 0px 0px;
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
  min-height: 70px;
`;

const Img = styled.img`
  width: 100%;
  max-width: 600px;
  margin: 10px auto;
`;

const Card = props => {
  const designOption = () => {
    if (props.details.design === "") {
      return null;
    } else {
      return (
        <CardButton
          color="#E66D6B"
          link={props.details.design}
          target="blank"
          type="button"
        >
          <a href={props.details.design} target="blank">
            Design
          </a>
        </CardButton>
      );
    }
  };

  return (
    <Container>
      <H3>{props.details.name}</H3>
      <StackText>{props.details.stack}</StackText>
      <LanguagesText>{props.details.technology}</LanguagesText>
      <Img src={props.details.image} alt={props.details.image}></Img>
      <MainText>{props.details.description}</MainText>
      <ButtonFlexBox>
        <CardButton color="#11C765" link={props.details.demo} type="button">
          <a href={props.details.demo} target="blank">
            Demo
          </a>
        </CardButton>
        <CardButton
          color="#409CBE"
          link={props.details.code}
          target="blank"
          type="button"
        >
          <a href={props.details.code} target="blank">
            Code
          </a>
        </CardButton>
        {designOption()}
      </ButtonFlexBox>
    </Container>
  );
};

export default Card;
