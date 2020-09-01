import styled from "styled-components";
import React from "react";

const Mouse = styled.div`
  width: 30px;
  height: 60px;
  border: 2px solid #409cbe;
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 500px;
`;

const Wheel = styled.div`
  width: 12px;
  height: 12px;
  background: #409cbe;
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 500px;
  animation: bounce 0.5s ease-in 500ms infinite forwards;
  @keyframes bounce {
    0% {
      top: 10px;
    }
    50% {
      top: 20px;
    }
    100% {
      top: 10px;
    }
  }
`;

const MouseIcon = () => {
  return (
    <Mouse>
      <Wheel></Wheel>
    </Mouse>
  );
};

export default MouseIcon;
