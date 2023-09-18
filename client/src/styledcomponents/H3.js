import styled from "styled-components";

const H3 = styled.h3`
  color: ${props => {
    if (props.light) {
      return props.theme.lightText;
    } else {
      return props.theme.darkText;
    }
  }};
  font-size: 36px;
  font-weight: 300;
  font-style: italic;
  margin: 10px 0px;
  margin-left: ${props => {
    if (props.indended) {
      return "10vw";
    } else {
    }
  }};
  padding: 0px;
  max-width: 500px;

  @media screen and (max-width: 400px) {
    font-size: 16px;
    padding: auto 5px;
    text-align: center;
  }
`;

export default H3;
