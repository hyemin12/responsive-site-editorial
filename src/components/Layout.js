import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import Header from "./Header";
import SideBar from "./SideBar";
import theme from "../styles/theme";

import MenuButton from "./elements/MenuButton";

const Layout = ({ children }) => {
  const sideBarRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const handleMenu = () => {
    setVisible(!visible);
    const sideBar = sideBarRef.current;
    sideBar.className.includes("visible")
      ? (sideBar.style.marginLeft = `${sideBar.clientWidth * -1}px`)
      : (sideBar.style.marginLeft = 0);
  };
  useEffect(() => {
    handleMenu();
  }, []);
  return (
    <Container theme={theme}>
      <SideBar ref={sideBarRef} visible={visible} />
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
