import styled from "styled-components";
import React from "react";
import Linkedin from "../images/icons/linkedin-icon.png";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  min-width: 300px;
`;
const Label = styled.label`
  font-size: 14px;
  margin-top: 10px;
  color: #252525;
`;
const Input = styled.input`
  height: ${props => (props.message === true ? "80px" : "40px")};
  background: #f5f5f5;
  border: none;
  margin: 10px 0px;
  padding: 0px 10px;
  box-shadow: inset 0px 0px 0px #f5e5e5;
  transition: all 0.5s ease-in-out;
  :focus {
    box-shadow: inset 400px 0px 0px #f5e5e5;
  }
`;
const Button = styled.button`
  height: 50px;
  color: #fff;
  background: #ec706e;
  border: none;
  font-size: 17px;
  cursor: pointer;
  box-shadow: inset 0px 0px 0px #ff5c59;
  transition: all 0.5s ease-in-out;
  :hover {
    box-shadow: inset 400px 0px 0px #ff5c59;
  }
`;

const P = styled.p`
  color: #252525;
  font-size: 17px;
  text-align: center;
`;

const Img = styled.img`
  width: 70px;
  margin: 0px auto;
`;

const ContactForm = () => {
  return (
    <Form>
      <Label>Name*</Label>
      <Input type="text"></Input>
      <Label>Email Address*</Label>
      <Input type="text"></Input>
      <Label>Contact Number (optional)</Label>
      <Input type="text"></Input>
      <Label>Message*</Label>
      <Input message={true} type="text"></Input>
      <Button
        onClick={event => {
          event.preventDefault();
        }}
      >
        Send
      </Button>
      <P>or</P>
      <a href="https://www.linkedin.com/in/lewis-harris/" target="blank">
        <Img src={Linkedin} alt="linkedin-logo"></Img>
      </a>
    </Form>
  );
};

export default ContactForm;
