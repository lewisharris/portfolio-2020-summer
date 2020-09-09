import React from "react";
import styled from "styled-components";

const Button = styled.button`
  max-width: 110px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #cecece;
  border-radius: 500px;
  color: ${props => props.theme.darkText};
  background: none;
  margin: 0px auto;
  :hover {
    cursor: pointer;
    border-color: #409cbe;
    color: #409cbe;
  }
`;

const P = styled.p`
  margin-left: 5px;
`;

const IconContainer = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  flex-wrap: wrap;
  padding: 1px;
`;
const IconSegment = styled.div`
  width: ${props => {
    if (props.displayType === "List") {
      return "8px";
    } else {
      return "18px";
    }
  }};
  height: ${props => {
    if (props.displayType === "List") {
      return "8px";
    } else {
      return "3px";
    }
  }};
  background: #cecece;
  margin: 1px;
`;

class ToggleGallery extends React.Component {
  returnText = () => {
    if (this.props.displayType === "Grid") {
      return "List";
    } else {
      return "Grid";
    }
  };
  render() {
    return (
      <Button
        type="button"
        onClick={props => {
          this.props.changeDisplay();
        }}
      >
        <IconContainer>
          <IconSegment displayType={this.props.displayType} />
          <IconSegment displayType={this.props.displayType} />
          <IconSegment displayType={this.props.displayType} />
          <IconSegment displayType={this.props.displayType} />
        </IconContainer>
        <P>{this.returnText()} View</P>
      </Button>
    );
  }
}

export default ToggleGallery;
