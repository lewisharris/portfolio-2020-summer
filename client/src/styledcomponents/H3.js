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

  @media screen {
    font-size: 24px;
  }
`;

export default H3;
