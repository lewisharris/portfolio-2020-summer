import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Container = styled.div`
  display: grid;
  grid-template-columns: ${props => {
    if (props.displayType === "Grid") {
      return "repeat(auto-fill, minmax(300px, 1fr));";
    }
    return "auto;";
  }};
  justify-content: center;
  width: 100%;
`;

const CardContainer = props => {
  const ProjectsList = require("./ProjectsList.js");
  const list = ProjectsList.List;

  console.log(
    list.map(item => {
      return item.name;
    })
  );

  return (
    <Container displayType={props.displayType}>
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
