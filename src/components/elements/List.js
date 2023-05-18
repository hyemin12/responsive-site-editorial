import styled, { css } from "styled-components";
import theme from "../../styles/theme";

const List = ({ type, lists }) => {
  if (type === "ordered")
    return (
      <Ol>
        {lists &&
          lists.map((list, idx) => (
            <Li key={idx} type={"ordered"} theme={theme}>
              {list}
            </Li>
          ))}
      </Ol>
    );
  return (
    <ULStyle>
      {lists &&
        lists.map((list, idx) => (
          <Li key={idx} type={type} theme={theme}>
            {list}
          </Li>
        ))}
    </ULStyle>
  );
};
const MarginBottom = css`
  margin-bottom: 1.5em;
`;
const ULStyle = styled.ul`
  ${MarginBottom}
`;
const Ol = styled.ol`
  ${MarginBottom}
`;
const Li = styled.li`
  margin-left: 1.1em;
  margin-bottom: 0.25em;
  font-family: "Open Sans", sans-serif;
  color: ${({ theme }) => theme.color.grey};
  font-size: 0.9em;
  line-height: 1.6;

  ${({ type }) =>
    type === "unordered" &&
    ` list-style: disc;
  `}
  ${({ type }) => type === "ordered" && ` list-style: inherit;`} 
 
  ${({ type }) =>
    type === "alternate" &&
    `
    margin-left: 0;
    padding: 0.5em 0;
    border-bottom:1px solid #ccc; 
    &:first-child{padding-top:0;}`}
`;

export default List;
