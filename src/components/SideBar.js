import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import theme from "../styles/theme";

import Title from "./elements/Title";

import Menu from "./Menu";

const SideBar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Side>
      <SearchBoxWrapper>
        <form>
          <SearchBox type="text" name="editorial-search" placeholder="Search" />
        </form>
      </SearchBoxWrapper>

      <MenuContainer>
        <Title text={"Menu"} border={"bottom"} />
        <ul>
          <Menu />
        </ul>
      </MenuContainer>
    </Side>
  );
};
const Side = styled.div`
  width: 20vw;
  background-color: #f5f6f7;
`;

// Search
const SearchBoxWrapper = styled.div`
  background-color: #eff1f2;
  padding: 1.25em;
  margin-bottom: 1.5em;
`;
const SearchBox = styled.input`
  width: 100%;
`;

// Menu
const MenuContainer = styled.div`
  padding: 1.25em;
`;

export default SideBar;
