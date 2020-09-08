import styled from "styled-components";
import React from "react";
import GitHub from "../images/icons/github-icon.png";
import Medium from "../images/icons/medium-icon.png";
import Dribbble from "../images/icons/dribbble-icon.svg";
import LinkedIn from "../images/icons/linkedin-icon.png";
import Logo from "../images/icons/logo-main.png";
import Xicon from "../images/icons/X.svg";

const Menu = styled.div`
  width: 70vw;
  height: 100vh;
  background: black;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: 1;
`;

const UL = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
`;

const Li = styled.li`
  color: white;
  text-decoration: ${props => {
    if (props.underlined) {
      return "underlined";
    } else {
      return "none";
    }
  }}
  font-weight: 300;
  margin: 20px auto;
  width: 100%;

  :hover {
    color: #409cbe;
  }
`;

const Img = styled.img`
  width: 20px;
  filter: invert();
  margin-right: 15px;
  vertical-align: middle;
`;

const Icon = styled.img`
  width: 40px;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;

const LiCircle = styled(Li)`
  background: #409cbe;
  width: 30px;
  text-align: center;
  height: 30px;
  margin: 0px;
  padding: 0px;
  vertical-align: middle;
  border-radius: 500px;
  color: black;
  position: absolute;
  top: 50px;
  right: 30px;
`;

class HamburgerMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: true };
  }

  toggleSocial = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  render() {
    return (
      <Menu>
        <Icon regular src={Logo} alt={"logo"} />
        <UL>
          <Li>
            <a href="#projects">Projects</a>
          </Li>
          <Li>
            <a href="#about">About</a>
          </Li>
          <Li>
            <a href="#contact">Contact</a>
          </Li>
          <Li
            onClick={() => {
              this.toggleSocial();
            }}
          >
            Social {this.state.collapsed === true ? "+" : "  -"}
          </Li>
          {this.state.collapsed === false ? (
            <UL>
              <Li>
                <Img src={LinkedIn} alt="linkedin"></Img>
                <a
                  href="https://www.linkedin.com/in/lewis-harris/"
                  target="blank"
                >
                  Linkedin
                </a>
              </Li>
              <Li>
                <Img src={GitHub} alt="github"></Img>
                <a href="https://www.github.com/lewisharris" target="blank">
                  Github
                </a>
              </Li>
              <Li>
                <Img src={Medium} alt="medium"></Img>
                <a href="https://medium.com/@lewisdanielharris" target="blank">
                  Medium
                </a>
              </Li>
              <Li>
                <Img src={Dribbble} alt="dribble"></Img>
                <a href="https://dribbble.com/lewisharris" target="blank">
                  Dribbble
                </a>
              </Li>
            </UL>
          ) : null}

          <Li underlined>Digital Resume</Li>
          <LiCircle onClick={this.props.toggle}>
            <img src={Xicon} alt="X"></img>
          </LiCircle>
        </UL>
      </Menu>
    );
  }
}

export default HamburgerMenu;
