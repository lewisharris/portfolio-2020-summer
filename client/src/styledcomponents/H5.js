import styled from "styled-components";

const H5 = styled.h5`
  color: ${props => {
    if (props.light) {
      return "white";
    } else {
      return "#252525";
    }
  }};
  font-size: 24px;
  font-weight: 300;
  padding: 0px;
  margin: 20px 0px;
`;

export default H5;
