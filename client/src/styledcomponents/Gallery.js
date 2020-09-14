import React from "react";
import styled from "styled-components";
import ToggleGallery from "./ToggleGallery";
import CardContainer from "./CardContainer";
import { A, ABold } from "./A";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.theme.secondaryBg};
  padding: 2vw;
  margin: 0px auto;
  margin-top: 80px;
  box-sizing: border-box;
`;

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayType: "Grid"
    };
  }

  changeDisplayType = () => {
    if (this.state.displayType === "Grid") {
      this.setState({ displayType: "List" });
    } else {
      this.setState({ displayType: "Grid" });
    }
  };

  render() {
    return (
      <Container>
        <ToggleGallery
          changeDisplay={this.changeDisplayType}
          displayType={this.state.displayType}
        />
        <CardContainer displayType={this.state.displayType} />

        <A target="#" href="https://www.github.com/lewisharris">
          Full list of projects available on <ABold>GitHub</ABold>
        </A>
      </Container>
    );
  }
}

export default Gallery;
