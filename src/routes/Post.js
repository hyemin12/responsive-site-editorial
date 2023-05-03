import { useLocation } from "react-router-dom";
import Layout from "../components/Layout";
import Title from "../components/elements/Title";
import { data } from "../data";
import Img from "../components/elements/Img";
import styled from "styled-components";

import theme from "../styles/theme";

const Post = () => {
  const param = useLocation();
  const postCategory = param.pathname.replace("/", "");
  const post = data.contents.filter(
    (element) => element.category.toUpperCase() === postCategory.toUpperCase()
  )[0];
  console.log(post);
  const { title, text, img } = post;
  return (
    <Layout style={{ paddingBottom: "2em" }}>
      {post && (
        <>
          <Title text={title} size={"2.7em"} padding={"1.5em 0 1em 0"} />
          <Img src={img} alt={title} width={"100%"} ratio={"1280 / 416"} />
          <TextWrapper>
            {text.split("\n").map((t, idx) => (
              <P theme={theme}>{t}</P>
            ))}
          </TextWrapper>
        </>
      )}
    </Layout>
  );
};
const TextWrapper = styled.div`
  padding: 2.5em 0;
`;
const P = styled.p`
  margin-bottom: 2em;
  font-size: 0.9em;
  &:last-child {
    margin-bottom: 0;
  }
`;
export default Post;
