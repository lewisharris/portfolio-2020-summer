import styled from "styled-components";

const H4 = styled.h4`
  color: ${props => {
    if (props.light) {
      return "#cecece";
    } else {
      return "#252525";
    }
  }};
  font-size: 24px;
  font-weight: 500;
  padding: 0px;
`;

export default H4;
