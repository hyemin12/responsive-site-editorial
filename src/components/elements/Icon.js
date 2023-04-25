import styled from "styled-components";

const Icon = ({ icon }) => {
  return <I>{icon}</I>;
};
export const I = styled.i`
  color: #7f888f;
  transition: 0.4s;
  &:hover {
    color: #f56a6a;
  }
`;
export default Icon;
