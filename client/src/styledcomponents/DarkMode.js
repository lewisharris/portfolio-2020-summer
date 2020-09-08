import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 32px;
  height: 16px;
  background: #707070;
  border-radius: 500px;
  margin-right: 10px;
  position: relative;
  border: 2px solid white;
`;

const Circle = styled.div`
  width: 12px;
  height: 12px;
  position: absolute;
  top: 2px;
  left: ${props => {
    if (props.toggle === "day") {
      return "2px";
    }
    return "auto";
  }};
  right: ${props => {
    if (props.toggle === "night") {
      return "2px";
    }
    return "auto";
  }};
  background: white;
  border-radius: 50px;
  box-sizing: border-box;
  :hover {
    background: #ec6d69;
  }
`;

class DarkMode extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toggle: "day" };
  }

  setToggle = () => {
    if (this.state.toggle === "day") {
      this.setState({ toggle: "night" });
    } else {
      this.setState({ toggle: "day" });
    }
  };

  render() {
    return (
      <>
        <Container
          onClick={() => {
            if (this.state.toggle === "day") {
              this.setToggle("night");
            } else {
              this.setToggle("day");
            }
          }}
        >
          <Circle toggle={this.state.toggle}></Circle>
        </Container>
      </>
    );
  }
}

export default DarkMode;
