import { useLocation } from "react-router-dom";
import Layout from "../components/Layout";
import Title from "../components/elements/Title";
import { data } from "../data";
import Img from "../components/elements/Img";

const Post = () => {
  const param = useLocation();
  const postCategory = param.pathname.replace("/", "");
  const post = data.contents.filter(
    (element) => element.category.toUpperCase() === postCategory.toUpperCase()
  )[0];
  console.log(post);
  const { title, text, img } = post;
  return (
    <Layout>
      {post && (
        <>
          <Title text={title} size={"2.7em"} padding={"1.5em 0 1em 0"} />
          <Img src={img} alt={title} width={"100%"} ratio={"1280 / 416"} />
          {text.split("\n").map((para) => (
            <p>{para}</p>
          ))}
        </>
      )}
    </Layout>
  );
};

export default Post;
