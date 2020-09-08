import styled from "styled-components";

const P = styled.p`
  font-weight: ${props => {
    return props.weight;
  }};
  font-size: 14px;
  color: #f5f5f5;
  padding: 0px;
  margin-bottom: 30px;
`;

export default P;
