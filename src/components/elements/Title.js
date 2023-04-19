import styled from "styled-components";

const Title = ({ text, border, type, padding }) => {
  return (
    <>
      <H3 border={border} padding={padding}>
        {text}
      </H3>
    </>
  );
};

const H3 = styled.h3`
  font-size: 1.2em;
  padding: ${({ padding }) => (padding ? padding : 0)};
  ${({ border, theme }) =>
    border &&
    `padding-bottom: 0.25em;
  border-bottom: 3px solid ${theme.color.point}`}
`;
export default Title;
