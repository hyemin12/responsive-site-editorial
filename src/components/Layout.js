import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import Header from "./Header";
import SideBar from "./SideBar";
import theme from "../styles/theme";

import MenuButton from "./elements/MenuButton";

const Layout = ({ children }) => {
  const [visible, setVisible] = useState(true);
  const handleMenu = () => {
    setVisible(!visible);
  };
  useEffect(() => {
    handleMenu();
  }, []);
  return (
    <Container theme={theme}>
      <SideBar visible={visible} setVisible={setVisible} />
      <Main>
        <MenuButton func={handleMenu} />
        <Header />
        <>{children}</>
      </Main>
    </Container>
  );
};
const Container = styled.div`
  ${({ theme }) => theme.flexBox.flex("row", "start", "start")};
`;
const Main = styled.div`
  padding: 7em 5em;
  position: relative;
`;
export default Layout;
