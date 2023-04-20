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
      {text.split("\n").map((pargh) => (
        <p>{pargh}</p>
      ))}
      <button>more</button>
    </PostItem>
  );
};
const PostItem = styled.li`
  width: calc((100% - 2em) / 2);
  margin-bottom: 2em;
`;
const ImgWrapper = styled.div``;

export default MainPost;
