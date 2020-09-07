import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: right;
  position: absolute;
  top: 0px;
  right: 0px;
  margin-top: 30px;
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
      commits: 0
    };
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
