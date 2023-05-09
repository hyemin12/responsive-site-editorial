import styled from "styled-components";

const DefaultBtn = ({ text, size }) => {
  return <Button size={size}>{text}</Button>;
};
const Button = styled.button`
  background-color: transparent;
  padding: 1em 2em;
  border: 3px solid #f56a6a;
  color: #f56a6a;
  &:hover {
    background-color: rgba(245, 106, 106, 0.05);
  }
`;
export default DefaultBtn;
