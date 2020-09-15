import styled from "styled-components";

export const A = styled.a`
  font-size: 16px;
  color: ${props => {
    if (props.light) {
      return props.theme.lightText;
    } else {
      return props.theme.darkText;
    }
  }};
  margin: 0px auto;
  margin-top: 20px;
  display: inline-block;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  :hover {
    text-decoration: underline;
  }
  :visited {
    color: ${props => props.theme.darkText};
  }
`;

export const ABold = styled.p`
  font-weight: 600;
  display: inline;
  text-decoration: underline;
  margin-top: 5px;
`;
