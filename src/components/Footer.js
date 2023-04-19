import HyperLink from "./elements/HyperLink";

const Footer = () => {
  return (
    <footer>
      <p>
        © Untitled. All rights reserved. Demo Images:{" "}
        <HyperLink path="https://unsplash.com/ko" text="Unsplash" />
        . Design:
        <HyperLink path="https://html5up.net/" text="HTML5 UP" />.
      </p>
    </footer>
  );
};
export default Footer;
