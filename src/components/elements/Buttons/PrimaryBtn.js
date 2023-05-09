import styled from "styled-components";
import theme from "../../../styles/theme";

const PrimaryBtn = ({ size, text }) => {
  return (
    <Button size={size} theme={theme}>
      {text}
    </Button>
  );
};
const Button = styled.button`
  background-color: ${({ theme }) => theme.color.point};
  padding: 1em 2em;
  border: 3px solid #f56a6a;
  color: #fff;
  &:hover {
    opacity: 0.9;
  }
`;
export default PrimaryBtn;
