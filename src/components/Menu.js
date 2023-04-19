import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { I } from "./elements/Icon";

import theme from "../styles/theme";

import { FaAngleDown } from "react-icons/fa";

const Menu = () => {
  const [visible, setVisible] = useState(false);

  const links = [
    { title: "Homepage", path: "" },
    { title: "Generic", path: "" },
    { title: "Etiam Dolore", path: "" },
    { title: "Adipicing", path: "" },
    {
      title: "Submenu",
      path: "",
      submenu: ["lorem dolor", "Ipsum adipicing", "tempus magna"],
    },
    { title: "Elements", path: "" },
  ];
  return (
    <ul className="menu">
      {links.map(({ title, path, submenu }) => (
        <>
          {submenu ? (
            <Li onClick={() => setVisible(!visible)}>
              <SubMenu theme={theme}>
                <p>{title}</p>

                <Icon isVisible={visible}>
                  <FaAngleDown />
                </Icon>
              </SubMenu>

              <SubMenuUl className="sub-menu" isVisible={visible}>
                {submenu.map((element) => (
                  <li>
                    <SubNavItem to={`${path}-${element}`}>{element}</SubNavItem>
                  </li>
                ))}
              </SubMenuUl>
            </Li>
          ) : (
            <Li theme={theme}>
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

const Li = styled.li`
  border-top: 1px solid #ddd;
  &:first-child {
    padding-top: 1.5em;
    border: none;
  }
`;
const NavItem = styled(Link)`
  display: block;
  padding: 1em 0;
  font-size: 0.9em;
  color: ${({ theme }) => theme.color.default};
`;

const SubMenu = styled(NavItem)`
  ${({ theme }) => theme.flexBox.flex("row", "center", "space-between")};
  &:hover i {
    color: #f56a6a;
  }
`;
const SubNavItem = styled(Link)`
  display: block;
  padding: 0.5em 0;
  margin-left: 20px;
  font-size: 0.8em;
`;

const SubMenuUl = styled.ul`
  display: none;
  margin-bottom: 1em;
  ${({ isVisible }) => isVisible && `display: block;`}
`;

const Icon = styled(I)`
  ${({ isVisible }) => isVisible && `transform : rotate(-180deg);  `}
`;

export default Menu;
