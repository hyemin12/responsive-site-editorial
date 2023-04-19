import styled from "styled-components";

const Title = ({ text, border, type }) => {
  return (
    <div>
      <H3 border={border}>{text}</H3>
    </div>
  );
};

const H3 = styled.h3`
  font-size: 1.2em;
  ${({ border, theme }) =>
    border &&
    `display:inline-block;
    padding-bottom: 0.25em;
    border-bottom: 3px solid ${theme.color.point}`}
`;
export default Title;
