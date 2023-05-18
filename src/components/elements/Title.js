import styled from "styled-components";

const Title = ({ text, border, type, marginBottom, padding, size }) => {
  return (
    <H3
      border={border}
      padding={padding}
      marginBottom={marginBottom}
      size={size}
    >
      {text}
    </H3>
  );
};

export const H3 = styled.h3`
  display: inline-block;
  margin-bottom: ${({ marginBottom }) => marginBottom && marginBottom};
  padding: ${({ padding }) => (padding ? padding : 0)};

  font-size: ${({ size }) => (size ? size : "1.2em")};
  text-transform: capitalize;

  ${({ border, theme }) =>
    border &&
    `padding-bottom: 0.25em;
    margin-bottom:2em;
  border-bottom: 3px solid ${theme.color.point}`}
`;
export default Title;
