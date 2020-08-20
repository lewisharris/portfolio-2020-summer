import styled from "styled-components";
import React from "react";

const flexSection = styled.div``;
const Image = styled.img``;
const Caption = styled.div``;
const H5 = styled.h5``;
const P = styled.p``;

const ContactFlexSection = props => {
  return (
    <div>
      <img src={props.image} alt={props.image}></img>
      <div>
        <h5>{props.header}</h5>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default ContactFlexSection;
