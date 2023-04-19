import styled from "styled-components";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <>{children}</>
    </Container>
  );
};
const Container = styled.div`
  padding: 3em 3.5em;
`;
export default Layout;
