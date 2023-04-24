import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import theme from "../styles/theme";

import Menu from "./Menu";
import Title from "./elements/Title";
import SidePost from "./SidePost";
import HyperLink from "./elements/HyperLink";
import Footer from "./Footer";

import { data } from "../data";

import { FaSearch, FaEnvelope, FaPhone, FaHome } from "react-icons/fa";

const SideBar = () => {
  const [posts, setPosts] = useState([]);
  const innerRef = useRef(null);
  const requestPost = async () => {
    try {
      const res = await axios.get("http://localhost:4000/side");
      setPosts(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
      setPosts(data.side);
    }
  };
  useEffect(() => {
    requestPost();
  }, []);
  // 특정 높이가 되면 사이드바 고정시키기
  const handleSideBar = () => {
    if (innerRef.current) {
      const sidebarHeight = innerRef.current.clientHeight;
      const documentHeight = document.documentElement.clientHeight;
      const currentScrollY = window.scrollY;

      if (currentScrollY >= sidebarHeight - documentHeight) {
        innerRef.current.style.position = "fixed";
        innerRef.current.style.top = `-${
          innerRef.current.clientHeight - documentHeight
        }px`;
      } else {
        innerRef.current.style.position = "relative";
        innerRef.current.style.top = 0;
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleSideBar);
    return () => window.removeEventListener("scroll", handleSideBar);
  }, []);

  return (
    <Container>
      <Inner ref={innerRef}>
        <SearchBoxWrapper id="search-box">
          <Form>
            <SearchBox
              type="text"
              name="editorial-search"
              placeholder="Search"
            />
            <SearchIcon>
              <FaSearch />
            </SearchIcon>
          </Form>
        </SearchBoxWrapper>

        <Wrapper id="menu">
          <Title
            text={"Menu"}
            border={"bottom"}
            padding={"2em 0"}
            size={"1.4em"}
          />

          <Menu />
        </Wrapper>

        <Wrapper>
          <Title
            text={"Etiam Dolore"}
            border={"bottom"}
            padding={"2em 0"}
            size={"1.4em"}
          />
          {posts &&
            posts.map((post, idx) => (
              <SidePost key={post.id} {...post} idx={idx} />
            ))}
        </Wrapper>

        <Wrapper>
          <Title
            text={"Get in touch"}
            border={"bottom"}
            padding={"2em 0"}
            size={"1.4em"}
          />
          <P>
            Sed varius enim lorem ullamcorper dolore aliquam aenean ornare velit
            lacus, ac varius enim lorem ullamcorper dolore. Proin sed aliquam
            facilisis ante interdum. Sed nulla amet lorem feugiat tempus
            aliquam.
          </P>
          <Row>
            <i>
              <FaEnvelope />
            </i>
            <HyperLink
              path={"https://mail.google.com/mail/u/0/#inbox"}
              text={"information@untitled.tld"}
            />
          </Row>
          <Row>
            <i>
              <FaPhone />
            </i>
            <p>(000) 000-0000</p>
          </Row>
          <Row>
            <i>
              <FaHome />
            </i>
            <p>1234 Somewhere Road #8254 Nashville, TN 00000-0000</p>
          </Row>
        </Wrapper>
        <Footer />
      </Inner>
    </Container>
  );
};
const Container = styled.div`
  width: 20vw;
  background-color: #f5f6f7;
`;
const Inner = styled.div`
  width: 20vw;
  padding: 1.25em;
  background-color: #f5f6f7;
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
const SearchIcon = styled.i`
  color: #7f888f;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
`;

const Wrapper = styled.div`
  border-bottom: 1px solid #ccc;
`;
const P = styled.p`
  margin-bottom: 1em;
  font-size: 0.8em;
`;

const Row = styled.div`
  ${({ theme }) => theme.flexBox.flex("row", "start", "start")};
  gap: 1em;
  padding: 1em 0;
  border-bottom: 1px solid #ddd;
  &:last-child {
    border-bottom: none;
  }
`;

export default SideBar;
