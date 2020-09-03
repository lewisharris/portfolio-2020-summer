import styled from "styled-components";

const H3 = styled.h3`
  color: #252525;
  font-size: 36px;
  font-weight: 300;
  font-style: italic;
  margin: 10px;
  margin-left: ${props => {
    if (props.indended) {
      return "10vw";
    } else {
      return "0px";
    }
  }};
  padding: 0px;
  max-width: 500px;
`;

export default H3;
