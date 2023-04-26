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
    if (sideBarRef.current && visible) {
      sideBarRef.current.style.marginLeft = `${
        sideBarRef.current.clientWidth * -1
      }px`;
      console.log(sideBarRef.current.clientWidth * -1, sideBarRef);
      // console.log(sideBarRef);
    } else {
      sideBarRef.current.style.marginLeft = 0;
    }
  };
  useEffect(() => {
    handleMenu();
  }, []);
  return (
    <Container theme={theme}>
      <SideBar ref={sideBarRef} />
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
  // width: 80vw;
  padding: 7em 5em;
  position: relative;
`;
export default Layout;
