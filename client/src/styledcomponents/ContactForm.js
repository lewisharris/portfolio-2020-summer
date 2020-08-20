import styled from "styled-components";
import React from "react";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
`;
const Label = styled.label`
  font-size: 14px;
  margin-top: 10px;
  color: #252525;
`;
const Input = styled.input`
  height: 40px;
  background: #f5f5f5;
  border: none;
  margin: 10px;
`;
const Button = styled.button`
  height: 50px;
  color: #fff;
  background: #ec706e;
  border: none;
  font-size: 17px;
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
      <Input type="text"></Input>
      <Button>Send</Button>
    </Form>
  );
};

export default ContactForm;
