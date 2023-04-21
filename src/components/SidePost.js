import styled from "styled-components";
import Img from "./elements/Img";

const SidePost = (props) => {
  const { id, title, text, img } = props;
  return (
    <Article>
      <Img
        width={"100%"}
        ratio={"91/55"}
        type={"link"}
        src={img}
        alt={title}
        path={id}
      />
      <P>{text.split("\n")[0]}</P>
    </Article>
  );
};
const Article = styled.article`
  padding: 2em 0;
  border-bottom: 1px solid #ddd;
`;
const P = styled.p`
  padding-top: 1.5em;

  font-size: 0.8em;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
export default SidePost;
