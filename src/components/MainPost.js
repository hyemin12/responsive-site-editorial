import { Link } from "react-router-dom";
import styled from "styled-components";

import Img from "./elements/Img";

const MainPost = (props) => {
  const { title, id, text, img } = props;
  console.log(props);
  return (
    <PostItem>
      <Img width={"100%"} height={"auto"} src={img} alt={title} />

      <h4>{title}</h4>
      <P>{text.split("\n")[0]}</P>
      <button>more</button>
    </PostItem>
  );
};
const PostItem = styled.li`
  width: calc((100% - 2em) / 2);
  margin-bottom: 2em;
`;
const P = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
export default MainPost;
