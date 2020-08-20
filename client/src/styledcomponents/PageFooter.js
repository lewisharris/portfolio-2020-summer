import styled from "styled-components";
import React from "react";

const Footer = styled.footer`
  background: #ec706e;
`;
const PageFooter = () => {
  return (
    <Footer>
      <footer>
        <div>
          <h4>Links</h4>
          <ul>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
        </div>
        <div>
          <h4>Links</h4>
          <ul>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
        </div>
      </footer>
    </Footer>
  );
};

export default PageFooter;
