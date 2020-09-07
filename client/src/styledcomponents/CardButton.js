import styled from "styled-components";

const CardButton = styled.button`
  width: 60px;
  background: white;
  margin-right: 10px;
  border-radius: 500px;
  border: 2px solid
    ${props => {
      return props.color;
    }};
  box-sizing: border-box;
  padding: 5px;
  :hover {
    background: ${props => {
      return props.color;
    }};
    color: white;
    cursor: pointer;
  }
`;

export default CardButton;
