import { useLocation, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Title from "../components/elements/Title";
import { data } from "../data";
import Img from "../components/elements/Img";
import styled from "styled-components";

import theme from "../styles/theme";

const Post = () => {
  const param = useLocation();
  const { id } = useParams();
  const postCategory = id
    ? id * 1
    : param.pathname.replace("/", "").toUpperCase().replaceAll("%20", " ");
  const post = data.contents.filter(
    (element) =>
      element.category.toUpperCase() === postCategory ||
      element.id === postCategory
  )[0];
  console.log(postCategory, post, param, id);
  const { title, text, img, subtitle, text2 } = post;

  return (
    <Layout>
      {post ? (
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
      ) : (
        <div>페이지 오류</div>
      )}
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
