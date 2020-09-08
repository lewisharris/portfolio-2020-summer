import React from "react";
import ToggleGallery from "./ToggleGallery";
import CardContainer from "./CardContainer";
import { A, ABold } from "./A";

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
    const galleryStyle = {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      background: "#fafafa",
      padding: "2vw",
      margin: "0px auto",
      marginTop: "80px",
      boxSizing: "border-box"
    };
    return (
      <div style={galleryStyle}>
        <ToggleGallery
          changeDisplay={this.changeDisplayType}
          displayType={this.state.displayType}
        />
        <CardContainer displayType={this.state.displayType} />

        <A target="#" href="https://www.github.com/lewisharris">
          Full list of projects available on <ABold>GitHub</ABold>
        </A>
      </div>
    );
  }
}

export default Gallery;
