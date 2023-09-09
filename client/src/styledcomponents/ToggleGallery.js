import React from "react";
import styled from "styled-components";

const Button = styled.button`
  max-width: 110px;
  height: 30px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  border: 2px solid #cecece;
  border-radius: 500px;
  color: ${props => props.theme.darkText};
  background: none;
  margin: 20px auto;
  :hover {
    cursor: pointer;
    border-color: #409cbe;
    color: #409cbe;
  }
`;

const P = styled.p`
  margin-left: 5px;
`;

const IconContainer = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  flex-wrap: wrap;
  padding: 1px;
`;
const IconSegment = styled.div`
  width: ${props => {
    if (props.displayType === "List") {
      return "8px";
    } else {
      return "18px";
    }
  }};
  height: ${props => {
    if (props.displayType === "List") {
      return "8px";
    } else {
      return "3px";
    }
  }};
  background: #cecece;
  margin: 1px;
`;
export default function ToggleGallery() {
  return (
    <Button type="button">
      <IconContainer>
        <IconSegment />
        <IconSegment />
        <IconSegment />
        <IconSegment />
      </IconContainer>
      <P>Add view options</P>
    </Button>
  );
}
