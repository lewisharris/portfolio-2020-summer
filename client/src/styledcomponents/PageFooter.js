import styled from "styled-components";
import React from "react";

const Footer = styled.footer`
  background: #ec706e;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 3vw;
  position: relative;
`;

const LinkContainer = styled.div`
  margin: 0px auto;
`;

const Ul = styled.ul`
  list-style-type: none;
  padding: 0px 20px;
  margin: 0px;
  margin-bottom: 20px;
`;

const H4 = styled.h4`
  color: white;
  font-weight: 300;
  font-size: 16px;
`;

const Li = styled.li`
  color: white;
  padding: 5px 0px;
  margin: 0px;
  font-weight: 300;
  font-size: 10px;
  :hover {
    cursor: pointer;
    font-weight: 500;
  }
`;

const P = styled.p`
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 10px;
  color: white;
  font-weight: 300;
`;

const PageFooter = () => {
  return (
    <Footer>
      <LinkContainer>
        <H4>Site</H4>
        <Ul>
          <Li>
            <a href="#projects">Projects</a>
          </Li>
          <Li>
            <a href="#about">About Me</a>
          </Li>
          <Li>
            <a href="#contact">Contact</a>
          </Li>
        </Ul>
      </LinkContainer>
      <LinkContainer>
        <H4>Social</H4>
        <Ul>
          <Li>
            <a href="https://www.linkedin.com/in/lewis-harris/" target="blank">
              Github
            </a>
          </Li>
          <Li>
            <a href="https://www.github.com/lewisharris" target="blank">
              LinkedIn
            </a>
          </Li>
          <Li>
            <a href="https://dribbble.com/lewisharris" target="blank">
              Dribbble
            </a>
          </Li>
          <Li>
            <a href="https://medium.com/@lewisdanielharris" target="blank">
              Medium
            </a>
          </Li>
        </Ul>
      </LinkContainer>
      <P>Lewis Harris 2020</P>
    </Footer>
  );
};

export default PageFooter;
