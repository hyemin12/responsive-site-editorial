import styled from "styled-components";

import theme from "../../styles/theme";

const HyperLink = ({ path, text }) => {
  return (
    <A href={path} target="_blank" rel="noreferrer" theme={theme}>
      <P>{text}</P>
    </A>
  );
};

const A = styled.a`
  text-decoration: underline dotted ${({ theme }) => theme.color.grey};
`;
const P = styled.p`
  transition: 0.4s;
  &:hover {
    color: ${({ theme }) => theme.color.point};
  }
`;
export default HyperLink;
