import styled from "styled-components";

const Button = styled.button`
  border: none;
  padding: 5px 0px;
  background: none;
  color: #eb706e;
  font-size: 18px;
  font-weight: 600;
  margin: 0px;
  border-bottom: 2px solid #eb706e;
  max-width: 150px;
  :hover {
    color: #ff5c59;
    cursor: pointer;
    border-bottom: 2px solid #ff5c59;
  }
  @media screen and (max-width: 368px) {
    margin: 10px auto;
  }
`;

export default Button;
