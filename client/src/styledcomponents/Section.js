import styled from "styled-components";

const Section = styled.div`
  width: 80vw;
  margin: ${props => {
    if (props.landing) {
      return "0px auto";
    } else {
      return "100px auto";
    }
  }};
  max-width: 1440px;
  z-index: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 400px) {
    width: 100vw;
  }
`;

export default Section;
