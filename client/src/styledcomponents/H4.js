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
  padding: 0px;
`;

export default H4;
