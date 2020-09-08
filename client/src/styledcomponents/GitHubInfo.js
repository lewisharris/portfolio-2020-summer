import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: right;
  position: ${props => {
    if (props.windowSize > 500) {
      return "absolute";
    }
    return "auto";
  }};
  top: ${props => {
    if (props.windowSize > 500) {
      return "0px";
    }
    return "auto";
  }};
  right: ${props => {
    if (props.windowSize > 500) {
      return "0px";
    }
    return "auto";
  }};
  margin: 30px 20px 0px 0px;
`;
const P = styled.p`
  font-weight: 900;
  font-size: 18px;
  padding: 0px;
  margin-bottom: 0px;
`;
const Span = styled.span`
  color: #e66d6b;
  font-size: 18px;
`;

class GitHubInfo extends React.Component {
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
      <Container>
        <P>This Week </P>
        <P>
          {this.state.pullRequests}
          <Span> Pull Requests</Span>
        </P>
        <P>
          {this.state.commits}
          <Span> Commits</Span>
        </P>
      </Container>
    );
  }
}

export default GitHubInfo;
