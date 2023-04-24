import styled from "styled-components";
import Header from "./Header";
import SideBar from "./SideBar";
import theme from "../styles/theme";

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
  ${({ theme }) => theme.flexBox.flex("row", "start", "start")}
`;
const Main = styled.div`
  width: 80vw;
  padding: 7em 5em;
`;
export default Layout;
