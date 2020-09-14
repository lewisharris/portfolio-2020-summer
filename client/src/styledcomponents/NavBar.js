import React from "react";
import styled from "styled-components";
import Logo from "../images/icons/logo-main.png";
import DarkMode from "./DarkMode";
import Hamburger from "./Hamburger";

const Nav = styled.nav`
  width: 100vw;
  margin: 0px auto;
  position: relative;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  height: 60px;
  z-index: 3;
`;
const Ul = styled.ul`
  display: flex;
  flex-direction: "row";
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  top: 50px;
  right: 15vw;
`;
const Li = styled.li`
  padding-left: 30px;
  list-style-type: none;
  color: #cecece;
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
  top: 50px;
  left: 10vw;
`;

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pullRequests: 0,
      commits: 0,
      WindowSize: null
    };
  }

  getWindowSize = () => {
    const windowWidth = window.innerWidth;
    this.setState({ windowSize: windowWidth });
  };

  componentDidMount() {
    window.addEventListener("resize", this.getWindowSize);
    this.getWindowSize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.getWindowSize);
  }
  render() {
    return (
      <Nav>
        <Img src={Logo} alt={"main-logo"}></Img>
        {this.state.windowSize > 575 ? (
          <Ul>
            <DarkMode
              toggleTheme={this.props.toggleTheme}
              currentTheme={this.props.currentTheme}
            />
            <Li>
              <a href="#projects">Projects</a>
            </Li>
            <Li>
              <a href="#about">About</a>
            </Li>
            <Li href="#contact">
              <a href="#contact">Contact</a>
            </Li>
          </Ul>
        ) : (
          <Hamburger />
        )}
      </Nav>
    );
  }
}

export default NavBar;
