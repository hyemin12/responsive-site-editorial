import styled from "styled-components";

import HyperLink from "./elements/HyperLink";

import theme from "../styles/theme";

const Footer = () => {
  return (
    <FooterWrapper theme={theme}>
      <P>© Untitled. All rights reserved. Demo Images: </P>
      <HyperLink path="https://unsplash.com/ko" text="Unsplash" />
      <P> . Design: </P>
      <HyperLink path="https://html5up.net/" text="HTML5 UP" />.
    </FooterWrapper>
  );
};
const FooterWrapper = styled.footer`
  ${({ theme }) => theme.flexBox.flex("row", "start", "start")};
  flex-wrap: wrap;
  padding: 3em 0;
  a p {
    font-size: 0.75em;
  }
`;
const P = styled.p`
  color: #7f888f;
  font-size: 0.75em;
`;
export default Footer;
