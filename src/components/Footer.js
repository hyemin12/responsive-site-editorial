import styled from "styled-components";
import HyperLink from "./elements/HyperLink";

const Footer = () => {
  return (
    <footer>
      <P>
        © Untitled. All rights reserved. Demo Images:
        <HyperLink path="https://unsplash.com/ko" text="Unsplash" />
        . Design:
        <HyperLink path="https://html5up.net/" text="HTML5 UP" />.
      </P>
    </footer>
  );
};
const P = styled.p`
  color: #7f888f;
  font-size: 0.75em;
`;
export default Footer;
