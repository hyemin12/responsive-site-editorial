import styled from "styled-components";
import theme from "../../../styles/theme";
import { Default } from "./DefaultBtn";

const PrimaryBtn = ({ type, size, text, disabled, fit }) => {
  return (
    <Primary
      type={type}
      size={size}
      theme={theme}
      disabled={disabled}
      fit={fit}
    >
      {text}
    </Primary>
  );
};
export const Primary = styled(Default)`
  background-color: ${({ theme }) => theme.color.point};
  border: 3px solid #f56a6a;
  color: #fff;
  &:hover {
    background-color: ${({ theme }) => theme.color.point} !important;
    opacity: 0.9 !important;
  }
`;

export default PrimaryBtn;
