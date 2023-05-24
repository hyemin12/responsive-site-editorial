import styled from "styled-components";
import theme from "../styles/theme";

import Header from "./Header";
import SideBar from "./SideBar";
import { useState } from "react";

const Layout = ({ children }) => {
  const [visible, setVisible] = useState(true);
  return (
    <Container theme={theme}>
      <SideBar visible={visible} setVisible={setVisible} />
      <Main visible={visible}>
        <Header />
        <>{children}</>
      </Main>
    </Container>
  );
};
const Container = styled.div`
  ${({ theme }) => theme.flexBox.flex("row", "start", "start")};
  @media ${({ theme }) => theme.device.tablet} {
    display: block;
  }
`;
const Main = styled.div`
  padding: 7em 5em;
  position: relative;
  width: ${({ visible }) => (visible ? "calc(100% - 20em)" : "100%")};
  @media ${({ theme }) => theme.device.tablet} {
    width: ${({ visible }) => (visible ? "calc(100% - 18em)" : "100%")};
  }
  @media ${({ theme }) => theme.device.tablet} {
    padding: 7em 3em;
    padding-bottom: 0;
  }
`;
export default Layout;
