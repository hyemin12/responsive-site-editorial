import styled from "styled-components";
import theme from "../styles/theme";

import Header from "./Header";
import SideBar from "./SideBar";

const Layout = ({ children }) => {
  return (
    <Container theme={theme}>
      <SideBar />
      <Main>
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
