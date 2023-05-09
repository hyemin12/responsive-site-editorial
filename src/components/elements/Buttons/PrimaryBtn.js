import styled from "styled-components";
import theme from "../../../styles/theme";

const PrimaryBtn = ({ type, size, text }) => {
  return (
    <Primary type={type} size={size} theme={theme}>
      {text}
    </Primary>
  );
};
export const Primary = styled.button`
  background-color: ${({ theme }) => theme.color.point};
  border: 3px solid #f56a6a;
  color: #fff;
  ${({ size }) => size === "large" && `font-size: 0.9em;`};
  ${({ size }) => size === "small" && `font-size: 0.5em;`};
  ${({ type }) => type === "fit" && `width:100%`};
  ${({ type }) =>
    type === "disabled" &&
    `opacity:0.5;
    cursor:inherit;
    &:hover{
      opacity: 0.5 !important;
    }`}
  &:hover {
    opacity: 0.9;
  }
`;
export default PrimaryBtn;
