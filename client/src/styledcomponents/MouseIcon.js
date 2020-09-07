import styled from "styled-components";
import React from "react";

const MouseBorder = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 500px;
  background: none;
  position: absolute;
  bottom: 3vh;
  left: 50%;
  transform: translateX(-50%);
  transition: all 0.3s ease-in-out;
  :hover {
    background: rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
`;
const P = styled.p`
  text-align: center;
  margin: 10px auto;
  color: white;
  font-size: 12px;
`;

const Mouse = styled.div`
  width: 20px;
  height: 40px;
  border: 3px solid white;
  border-radius: 500px;
  background: none;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

const Wheel = styled.div`
  width: 4px;
  height: 8px;
  background: white;
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 500px;
  animation: bounce 0.8s ease-in 500ms infinite forwards;
  @keyframes bounce {
    0% {
      top: 10px;
    }
    50% {
      top: 15px;
    }
    100% {
      top: 10px;
    }
  }
`;

class MouseIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }
  setHover = () => {
    this.setState({ hover: true });
  };
  render() {
    return (
      <MouseBorder
        onClick={() => {
          console.log("projects");
        }}
      >
        <P>Scroll</P>
        <Mouse>
          <Wheel></Wheel>
        </Mouse>
      </MouseBorder>
    );
  }
}

export default MouseIcon;
