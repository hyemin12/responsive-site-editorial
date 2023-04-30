import { useLocation } from "react-router-dom";
import Layout from "../components/Layout";
import Title from "../components/elements/Title";
import { data } from "../data";

const Post = () => {
  const param = useLocation();
  const postCategory = param.pathname.replace("/", "");
  const post = data.contents.filter(
    (element) => element.category.toUpperCase() === postCategory.toUpperCase()
  );
  console.log(post);
  return (
    <Layout>
      <Title />
    </Layout>
  );
};

export default Post;
