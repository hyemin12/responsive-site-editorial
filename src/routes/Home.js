import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import Layout from "../components/Layout";
import Intro from "../components/Intro";
import Title, { H3 } from "../components/elements/Title";
import Feature from "../components/Feature";
import MainPost from "../components/MainPost";

import theme from "../styles/theme";
import { data } from "../data";

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
      <Intro />

      {/* FEATURES */}
      <Section>
        <FeaturesTitle>Features</FeaturesTitle>
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
    padding-bottom: 0;
    border-bottom: none;
  }
  @media ${({ theme }) => theme.device.mobile} {
    padding: 3em 0;
  }
`;

const FeatureWrapper = styled.ul`
  ${({ theme }) => theme.flexBox.flex("row", "start", "start")};
  gap: 2em;
  flex-wrap: wrap;
  @media ${({ theme }) => theme.device.tabletPortrait} {
    display: block;
    padding-top: 2em;
  }
`;
const FeaturesTitle = styled(H3)`
margin-bottom:2.5em;
border-bottom:3px solid ${({ theme }) => theme.color.point};
font-size:1.6em;
@media ${({ theme }) => theme.device.desktopWide} {
  margin-bottom:4em;
}

text={""} size={"1.6em"} border={"bottom"} />
`;

const PostsWrapper = styled.ul`
  ${({ theme }) => theme.flexBox.flex("row", "start", "start")};
  flex-wrap: wrap;
  width: 100%;
`;

export default Home;
