import styled from "styled-components";

const DefaultBtn = ({ type, text, size, disabled, fit }) => {
  return (
    <Default type={type} size={size} disabled={disabled} fit={fit}>
      {text}
    </Default>
  );
};
export const Default = styled.button`
  background-color: transparent;
  border: 3px solid #f56a6a;
  color: #f56a6a;
  ${({ size }) => size === "large" && `font-size: 0.9em;`}
  ${({ size }) => size === "small" && `font-size: 0.5em;`};
  ${({ fit }) => fit && `width:100%`};
  ${({ disabled }) =>
    disabled &&
    `opacity:0.5;
    cursor:inherit;
    &:hover{
      background-color:transparent !important;
    }`}
  &:hover {
    background-color: rgba(245, 106, 106, 0.05);
  }
`;
export default DefaultBtn;
