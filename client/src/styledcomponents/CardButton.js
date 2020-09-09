import styled from "styled-components";

const CardButton = styled.button`
  width: 60px;
  background: ${props => props.theme.bg};
  margin-right: 10px;
  border-radius: 500px;
  border: 2px solid
    ${props => {
      return props.color;
    }};
  box-sizing: border-box;
  padding: 5px;
  color: ${props => props.theme.darkText};
  :hover {
    background: ${props => {
      return props.color;
    }};
    color: ${props => props.theme.lightText};
    cursor: pointer;
  }
`;

export default CardButton;
