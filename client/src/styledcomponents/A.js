import styled from "styled-components";

export const A = styled.a`
  font-size: 16px;
  color: #eb706e;
  margin: 20px auto;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  :hover {
    text-decoration: underline;
  }
`;

export const ABold = styled(A)`
  font-weight: 600;
  display: inline-block;
  text-decoration: underline;
`;
