import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import theme from "../styles/theme";

import { FaAngleDown } from "react-icons/fa";

const Menu = () => {
  const [visible, setVisible] = useState(false);

  const links = [
    { title: "Homepage", path: "/" },
    { title: "Generic", path: "/generic" },
    { title: "Elements", path: "/elements" },
    {
      title: "Submenu",
      path: "",
      submenu: [
        { title: "lorem dolor", path: "/lorem dolor" },
        { title: "Ipsum adipicing", path: "/ipsum adipicing" },
        { title: "tempus magna", path: "/tempus magna" },
      ],
    },
    { title: "Etiam Dolore", path: "/etiam dolore" },
    { title: "Adipicing", path: "/adipicing" },
  ];
  return (
    <ul className="menu">
      {links.map(({ title, path, submenu }) => (
        <>
          {submenu ? (
            <Li key={title} onClick={() => setVisible(!visible)}>
              <SubMenu theme={theme}>
                {title}

                <Icon isVisible={visible}>
                  <FaAngleDown />
                </Icon>
              </SubMenu>

              <SubMenuUl className="sub-menu" isVisible={visible}>
                {submenu.map((element) => (
                  <li key={`${path}-${element.title}`}>
                    <SubNavItem to={element.path}>{element.title}</SubNavItem>
                  </li>
                ))}
              </SubMenuUl>
            </Li>
          ) : (
            <Li key={title} theme={theme}>
              <NavItem to={path} theme={theme}>
                {title}
              </NavItem>
            </Li>
          )}
        </>
      ))}
    </ul>
  );
};
const LinkStyle = styled(Link)`
  text-decoration: none;
`;
const Li = styled.li`
  padding: 1em 0;
  border-top: 1px solid #ddd;
  &:first-child {
    padding-top: 0;
    border: none;
  }
`;
const NavItem = styled(LinkStyle)`
  display: block;
  font-size: 0.7em;
  color: ${({ theme }) => theme.color.default};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  @media ${({ theme }) => theme.device.desktopWide} {
    font-size: 0.9em;
  }
`;
const SubMenuUl = styled.ul`
  display: none;
  padding: 1em 0;
  ${({ isVisible }) => isVisible && `display: block;`};
`;
const SubMenu = styled(NavItem)`
  ${({ theme }) => theme.flexBox.flex("row", "center", "space-between")};
  &:hover i {
    color: #f56a6a;
  }
`;
const SubNavItem = styled(LinkStyle)`
  display: block;
  padding: 0.5em 0;
  margin-left: 20px;
  color: ${({ theme }) => theme.color.default};
  font-size: 0.8em;
  @media ${({ theme }) => theme.device.desktopWide} {
    font-size: 0.9em;
  }
`;

const Icon = styled.i`
  color: ${({ theme }) => theme.color.grey};
  transition: 0.4s;
  ${({ isVisible }) => isVisible && `transform : rotate(-180deg);  `}
  &:hover {
    color: ${({ theme }) => theme.color.point};
  }
`;

export default Menu;
