import { Link } from "react-router-dom";
import styled from "styled-components";

import Img from "./elements/Img";

const MainPost = () => {
  return (
    <Link>
      <ImgWrapper>
        <Img />
      </ImgWrapper>

      <h4>Title</h4>
      <p>fdsfsd</p>
      <button></button>
    </Link>
  );
};
const ImgWrapper = styled.div``;

export default MainPost;
