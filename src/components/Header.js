import { Link } from "react-router-dom";

import theme from "../styles/theme";
import styled from "styled-components";

import HyperLink from "./elements/HyperLink";

import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaDribbble,
} from "react-icons/fa";

const Header = () => {
  const socials = [
    {
      name: "twitter",
      icon: <FaTwitter />,
      path: "https://twitter.com/?lang=ko",
    },
    {
      name: "facebook",
      icon: <FaFacebookF />,
      path: "https://ko-kr.facebook.com/",
    },
    { name: "github", icon: <FaInstagram />, path: "https://github.com/" },
    { name: "dribble", icon: <FaGithub />, path: "https://dribbble.com/" },
    { name: "tumblr", icon: <FaDribbble />, path: "https://www.tumblr.com/" },
  ];
  return (
    <HeaderStyle theme={theme}>
      <Link to="/">
        <Logo theme={theme}>
          <span>Editorial</span> by HTML5 UP
        </Logo>
      </Link>
      <SocialWrapper className="socials" theme={theme}>
        {socials &&
          socials.map(({ name, icon, path }) => (
            <HyperLink key={name} text={icon} path={path} size={"1.1em"} />
          ))}
      </SocialWrapper>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  ${({ theme }) => theme.flexBox.flex("row", "center", "space-between")}
  padding-bottom:1em;
  border-bottom: 4px solid ${({ theme }) => theme.color.point};
`;

const Logo = styled.h4`
  font-weight: 400;
  span {
    color: ${({ theme }) => theme.color.default};
    font-weight: 700;
    transition: 0.4s;
  }
  &:hover span {
    color: ${({ theme }) => theme.color.point};
  }
`;

const SocialWrapper = styled.div`
  ${({ theme }) => theme.flexBox.flex()};
  gap: 1em;
  font-size: 1em;
`;
export default Header;
