import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import Layout from "../components/Layout";
import Title from "../components/elements/Title";
import Img from "../components/elements/Img";
import Feature from "../components/Feature";
import MainPost from "../components/MainPost";

import theme from "../styles/theme";
import { data } from "../data";

import { FaGem, FaPaperPlane, FaRocket, FaSignal } from "react-icons/fa";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const features = data.features;

  /** 포스트 데이터 가져오는 함수
   * - json-server를 실행하면 서버에서 데이터를 가져오기
   * - 서버에서 데이터 가져오는 것을 실패하면 data.js 파일에서 데이터 가져오기
   */
  const requestPost = async () => {
    try {
      const res = await axios.get("http://localhost:4000/contents");
      setPosts(res.data.slice(0, 6));
    } catch (err) {
      console.log(err);
      setPosts(data.contents.slice(0, 6));
    }
  };

  useEffect(() => {
    requestPost();
  }, []);

  return (
    <Layout>
      <MainSection theme={theme}>
        <div>
          <Title text={"Hi, I’m Editorial by HTML5 UP"} size={"3.3em"} />
          <SubTitle theme={theme}>
            A FREE AND FULLY RESPONSIVE SITE TEMPLATE
          </SubTitle>
          <P theme={theme}>
            Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
            aliquam facilisis ante interdum congue. Integer mollis, nisl amet
            convallis, porttitor magna ullamcorper, amet egestas mauris. Ut
            magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas.
            Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.
          </P>
          <button>Learn more</button>
        </div>

        <Img
          width={"50%"}
          height={"100%"}
          imgWidth={"auto"}
          ratio={"88 / 69"}
          src={
            "https://images.unsplash.com/photo-1547692098-b139f1ea4cbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          }
          alt={"A FREE AND FULLY RESPONSIVE SITE TEMPLATE"}
        />
      </MainSection>

      {/* FEATURES */}
      <Section>
        <Title text={"Features"} size={"1.6em"} border={"bottom"} />
        <FeatureWrapper theme={theme}>
          {features &&
            features.map((feature) => (
              <Feature {...feature} key={feature.title} />
            ))}
        </FeatureWrapper>
      </Section>

      {/* Posts */}
      <Section>
        <Title text={"Ipsum sed Posts"} size={"1.6em"} border={"bottom"} />
        <PostsWrapper>
          {posts && posts.map((post) => <MainPost {...post} key={post.id} />)}
        </PostsWrapper>
      </Section>
    </Layout>
  );
};

const Section = styled.section`
  padding: 4em 0;
  border-bottom: 2px solid #ddd;
  &:last-child {
    border-bottom: none;
  }
`;
const MainSection = styled(Section)`
  ${({ theme }) => theme.flexBox.flex("row", "start", "start")};
  gap: 4em;
`;
const SubTitle = styled.h4`
  padding: 1.5em 0;
  font-size: 1em;
  color: ${({ theme }) => theme.color.grey};
  font-weight: 400;
  text-transform: uppercase;
`;
const P = styled.p`
  margin-bottom: 2em;
`;
const FeatureWrapper = styled.ul`
  ${({ theme }) => theme.flexBox.flex("row", "start", "start")};
  gap: 2em;
  flex-wrap: wrap;
`;

const PostsWrapper = styled.ul`
  ${({ theme }) => theme.flexBox.flex("row", "start", "start")};
  flex-wrap: wrap;
  width: 100%;
`;

export default Home;
