import styled from "styled-components";

const P = styled.p`
  font-weight: ${props => {
    return props.weight;
  }};
  font-size: 14px;
  color: #f5f5f5;
  padding: 0px;
  max-width: 700px;
  margin-bottom: 30px;

  @media screen and (max-width: 400px) {
    padding: 0px 10px;
  }
`;

export default P;
