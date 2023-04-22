import styled from "styled-components";

const Title = ({ text, border, type, padding, size }) => {
  return (
    <H3 border={border} padding={padding} size={size}>
      {text}
    </H3>
  );
};

const H3 = styled.h3`
  font-size: ${({ size }) => (size ? size : "1.2em")};

  padding: ${({ padding }) => (padding ? padding : 0)};
  ${({ border, theme }) =>
    border &&
    `padding-bottom: 0.25em;
    margin-bottom:2em;
  border-bottom: 3px solid ${theme.color.point}`}
`;
export default Title;
