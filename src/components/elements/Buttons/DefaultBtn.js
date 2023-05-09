import styled from "styled-components";

const DefaultBtn = ({ type, text, size }) => {
  return (
    <Button type={type} size={size}>
      {text}
    </Button>
  );
};
const Button = styled.button`
  background-color: transparent;
  border: 3px solid #f56a6a;
  color: #f56a6a;
  ${({ size }) => size === "large" && `font-size: 0.9em;`}
  ${({ size }) => size === "small" && `font-size: 0.5em;`};
  ${({ type }) => type === "fit" && `width:100%`};

  &:hover {
    background-color: rgba(245, 106, 106, 0.05);
  }
`;
export default DefaultBtn;
