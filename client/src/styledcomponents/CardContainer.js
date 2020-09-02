import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const CardContainer = props => {
  return (
    <Container>
      <Card displayType={props.displayType} />
      <Card displayType={props.displayType} />
      <Card displayType={props.displayType} />
      <Card displayType={props.displayType} />
      <Card displayType={props.displayType} />
      <Card displayType={props.displayType} />
      <Card displayType={props.displayType} />
      <Card displayType={props.displayType} />
      <Card displayType={props.displayType} />
    </Container>
  );
};

export default CardContainer;
