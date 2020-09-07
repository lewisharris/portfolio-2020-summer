import styled from "styled-components";
import React from "react";

const FlexSection = styled.div`
  width: 100%;
  min-width: 300px;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;
const Image = styled.img`
  vertical-align: middle;
  height: 70px;
  margin: 10px 10px 50px 10px;
  :hover {
    cursor: pointer;
  }
`;
const Caption = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 0px 50px 30px;
`;
const H5 = styled.h5`
  margin: 0px;
  margin-bottom: 5px;
  :hover {
    cursor: pointer;
  }
`;
const P = styled.p`
  margin: 0px;
  font-weight: 300;
`;

const ContactFlexSection = props => {
  return (
    <FlexSection>
      <Image src={props.image} alt={props.image}></Image>
      <Caption>
        <H5>{props.header}</H5>
        <P>{props.text}</P>
      </Caption>
    </FlexSection>
  );
};

export default ContactFlexSection;
