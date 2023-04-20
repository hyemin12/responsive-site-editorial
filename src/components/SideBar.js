import styled from "styled-components";

import theme from "../styles/theme";

import Menu from "./Menu";
import Title from "./elements/Title";

import { FaSearch } from "react-icons/fa";
import Button from "./elements/Button";
import Footer from "./Footer";

const SideBar = () => {
  return (
    <Container>
      <SearchBoxWrapper id="search-box">
        <Form>
          <SearchBox type="text" name="editorial-search" placeholder="Search" />
          <Icon>
            <FaSearch />
          </Icon>
        </Form>
      </SearchBoxWrapper>

      <Wrapper id="menu">
        <Title text={"Menu"} border={"bottom"} padding={"2em 0"} />
        <Menu />
      </Wrapper>

      <Wrapper>
        <Title text={"Etiam Dolore"} border={"bottom"} padding={"2em 0"} />
        <Button text={"more"} />
      </Wrapper>

      <Wrapper>
        <Title text={"Get in touch"} border={"bottom"} padding={"2em 0"} />
      </Wrapper>
      <Footer />
    </Container>
  );
};
const Container = styled.div`
  width: 20vw;
  background-color: #f5f6f7;
  padding: 1.25em;
`;

// Search
const SearchBoxWrapper = styled.div`
  width: 20vw;
  background-color: #eff1f2;
  padding: 1.25em;
  margin-top: -1.25em;
  margin-left: -1.25em;
`;
const Form = styled.form`
  position: relative;
`;
const SearchBox = styled.input`
  width: 100%;
`;
const Icon = styled.i`
  color: #7f888f;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
`;

const Wrapper = styled.div`
  border-bottom: 1px solid #ccc;
`;

export default SideBar;
