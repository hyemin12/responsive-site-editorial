import { Link } from "react-router-dom";
import styled from "styled-components";

import Img from "./elements/Img";
import Title from "./elements/Title";

const MainPost = (props) => {
  const { title, id, text, img } = props;

  return (
    <PostItem>
      <Img width={"100%"} ratio={"13/8"} src={img} alt={title} type={"link"} />
      <br />
      <Title text={title} />
      <P>{text.split("\n")[0]}</P>
      <button>more</button>
    </PostItem>
  );
};
const PostItem = styled.li`
  width: calc((100% - 2em) / 2);
  border-bottom: 1px solid #ddd;
  padding-top: 2em;
  padding-bottom: 2em;
  &:nth-child(odd) {
    border-right: 1px solid #ddd;
    padding-right: 2em;
  }
  &:nth-child(even) {
    padding-left: 2em;
  }
`;
const P = styled.p`
  padding-top: 1em;
  margin-bottom: 2em;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
export default MainPost;
