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
  color: ${props => props.theme.darkText};
`;
const Input = styled.input`
  height: ${props => (props.message === true ? "80px" : "40px")};
  background: ${props => props.theme.form};
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
  color: ${props => props.theme.darkText};
  font-size: 17px;
  text-align: center;
`;

const Img = styled.img`
  width: 70px;
  margin: 0px auto;
  filter: ${props => props.theme.icon};
`;

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      number: "",
      message: "",
      status: ""
    };
  }

  handleInput = e => {
    let change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  };

  handleSubmit = event => {
    console.log(event.target);
    event.preventDefault();
    this.setState({ name: "" });
    this.setState({ email: "" });
    this.setState({ number: "" });
    this.setState({ message: "" });
  };

  render() {
    const status = this.state.status;
    return (
      <Form
        action="https://formspree.io/moqpaebj"
        method="POST"
        onSubmit={this.handleSubmit}
      >
        <Label>Name*</Label>
        <Input
          type="text"
          name="name"
          onChange={this.handleInput}
          value={this.state.name}
          required
        ></Input>
        <Label>Email Address*</Label>
        <Input
          type="email"
          name="email"
          onChange={this.handleInput}
          value={this.state.email}
        ></Input>
        <Label>Contact Number (optional)</Label>
        <Input
          type="text"
          name="number"
          onChange={this.handleInput}
          value={this.state.number}
        ></Input>
        <Label>Message*</Label>
        <Input
          type="text-area"
          name="message"
          onChange={this.handleInput}
          value={this.state.message}
          message
          required
        ></Input>
        <Button onClick={this.handleSubmit}>
          {status === "SUCCESS"
            ? "Send!"
            : status === "ERROR"
            ? "Oops, looks like there was an error"
            : "Submit"}
        </Button>
        <P>or</P>
        <a href="https://www.linkedin.com/in/lewis-harris/" target="blank">
          <Img src={Linkedin} alt="linkedin-logo"></Img>
        </a>
      </Form>
    );
  }
}

export default ContactForm;
