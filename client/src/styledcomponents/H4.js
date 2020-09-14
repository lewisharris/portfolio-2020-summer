import styled from "styled-components";

const H4 = styled.h4`
  color: ${props => {
    if (props.light) {
      return props.theme.lightText;
    } else {
      return props.theme.darkText;
    }
  }};
  font-size: 24px;
  font-weight: 500;
  text-align:left
  padding: 0px;
  @media only screen and (max-width:1000px){
    text-align:center;
  }
`;

export default H4;
