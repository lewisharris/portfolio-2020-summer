import styled from "styled-components";
//#252525
const H1 = styled.h1`
  color: white;
  font-size: 96px;
  font-weight: 900;
  margin: 0px;
  margin-top: 20vh;
  margin-bottom: 10px;
  padding: 0px;
  z-index: 2;

  @media screen and (max-width: 368px) {
    font-size: 48px;
  }

  @media screen and (orientation: landscape) and (max-width: 812px) {
    font-size: 48px;
  }

  @media screen and (max-width: 500px) {
    font-size: 60px;
  }
`;

export default H1;
