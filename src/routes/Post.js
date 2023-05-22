import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

import Layout from "../components/Layout";
import Title from "../components/elements/Title";
import Img from "../components/elements/Img";

import theme from "../styles/theme";

import { data } from "../data";

const Post = () => {
  const param = useLocation();
  const { id } = useParams();

  const postId = id ? id * 1 : param.pathname.replace("/", "").toLowerCase();
  const post = data.contents.filter((element) =>
    id ? element.id === postId : element.category.toLowerCase() === postId
  )[0];
  console.log(param, id, postId, post);
  //.replaceAll("%20", " ")
  // 페이지 이동 시 스크롤 위치 맨 위로 이동시키기
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { title, text, img, subtitle, text2 } = post;

  if (post === "undefined" || !post)
    return (
      <Layout>
        <h2>페이지 오류</h2>
      </Layout>
    );
  return (
    <Layout>
      <section>
        {post && (
          <>
            <Title text={title} size={"2.7em"} padding={"1.5em 0 1em 0"} />
            <Img src={img} alt={title} width={"100%"} ratio={"1280 / 416"} />
            <TextWrapper>
              {text.split("\n").map((t, idx) => (
                <P theme={theme} key={idx}>
                  {t}
                </P>
              ))}
            </TextWrapper>
            {subtitle && text2 && (
              <SubTextWrapper>
                <Title text={subtitle} size={"1.8em"} />
                <>
                  {text2.split("\n").map((t, idx) => (
                    <P theme={theme} key={idx}>
                      {t}
                    </P>
                  ))}
                </>
              </SubTextWrapper>
            )}
          </>
        )}
      </section>
    </Layout>
  );
};
const TextWrapper = styled.article`
  padding: 2.5em 0;
`;
const SubTextWrapper = styled(TextWrapper)`
  border-top: 1px solid #ccc;
`;
const P = styled.p`
  margin-bottom: 2em;
  font-size: 0.9em;
  &:last-child {
    margin-bottom: 0;
  }
`;
export default Post;
