import React from "react";
import styled from "styled-components";
import Logo from "../images/icons/logo-main.png";
import DarkMode from "./DarkMode";

const Nav = styled.nav`
  width: 100%;
  margin: 0px auto;
  max-width: 1440px;
  position: fixed;
  top: 0px;
  height: 60px;
  background: rgb(227, 33, 33);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 255) 80%,
    rgba(255, 255, 255, 0) 100%
  );
`;
const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  position: fixed;
  top: 0px;
  right: 15vw;
`;
const Li = styled.li`
  padding-left: 30px;
  list-style-type: none;
  cursor: pointer;
  font-size: 18px;
  :hover {
    color: #ec6d69;
  }
`;
const Img = styled.img`
  width: 60px;
  vertical-align: middle;
  position: fixed;
  top: 0px;
  left: 15vw;
`;

const NavBar = () => {
  return (
    <Nav>
      <Img src={Logo} alt={"main-logo"}></Img>
      <Ul>
        <Li>Projects</Li>
        <Li>Contact</Li>
      </Ul>
      <DarkMode />
    </Nav>
  );
};

export default NavBar;
