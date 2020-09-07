import styled from "styled-components";

const Section = styled.div`
  width: 80vw;
  margin: 100px auto;
  max-width: 1440px;
  z-index: 0;
  position: relative;
  @media screen and (max-width: 400px) {
    width: 90vw;
  }
`;

export default Section;
