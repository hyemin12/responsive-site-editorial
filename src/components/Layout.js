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
  @media ${({ theme }) => theme.device.tablet} {
    display: block;
  }
`;
const Main = styled.div`
  padding: 7em 5em;
  position: relative;
  @media ${({ theme }) => theme.device.tablet} {
    padding: 7em 3em;
    padding-bottom: 0;
  }
`;
export default Layout;
