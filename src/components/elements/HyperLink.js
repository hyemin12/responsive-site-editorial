import styled from "styled-components";

import theme from "../../styles/theme";

const HyperLink = ({ path, text }) => {
  return (
    <A href={path} target="_blank" rel="noreferrer" theme={theme}>
      {text}
    </A>
  );
};

const A = styled.a`
  text-decoration: underline dotted ${({ theme }) => theme.color.grey};
`;
export default HyperLink;
