import React from "react";
import styled from "styled-components";
import Logo from "../images/icons/logo-main.png";
import DarkMode from "./DarkMode";

const Nav = styled.nav`
  width: 100vw;
  margin: 0px auto;
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  height: 60px;
  z-index: 3;
`;
const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
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
        <DarkMode />
        <Li>Projects</Li>
        <Li>Contact</Li>
      </Ul>
    </Nav>
  );
};

export default NavBar;
