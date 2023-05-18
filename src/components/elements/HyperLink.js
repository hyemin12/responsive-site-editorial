import styled from "styled-components";

import theme from "../../styles/theme";

const HyperLink = ({ path, text, size }) => {
  const handleClick = (e) => {
    if (path) return;
    if (!path) return e.preventDefault();
  };
  return (
    <A
      href={path}
      target="_blank"
      rel="noreferrer"
      theme={theme}
      onClick={handleClick}
    >
      <P size={size}>{text}</P>
    </A>
  );
};

const A = styled.a`
  text-decoration: underline dotted ${({ theme }) => theme.color.grey};
`;
const P = styled.p`
  font-size: ${({ size }) => size && size};
  transition: 0.4s;

  &:hover {
    color: ${({ theme }) => theme.color.point};
  }
`;
export default HyperLink;
