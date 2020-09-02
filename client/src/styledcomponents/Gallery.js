import React from "react";
import styled from "styled-components";
import ToggleGallery from "./ToggleGallery";
import CardContainer from "./CardContainer";

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
      padding: "20px",
      borderRadius: "20px",
      marginTop: "80px"
    };
    return (
      <div style={galleryStyle}>
        <ToggleGallery
          changeDisplay={this.changeDisplayType}
          displayType={this.state.displayType}
        />
        <CardContainer displayType={this.state.displayType} />
      </div>
    );
  }
}

export default Gallery;
