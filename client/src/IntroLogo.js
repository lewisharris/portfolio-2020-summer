import React from "react";
import styled from "styled-components";
import Logo from "./images/icons/logo-intro.svg";

const Container = styled.div`
  width: 20vw;
  max-width: 300px;
  margin: 0px auto;
  padding: 0px;
`;

const IntroLogo = () => {
  return (
    <Container>
      <object data={Logo}>
        <img src={Logo}></img>
      </object>
    </Container>
  );
};

export default IntroLogo;
