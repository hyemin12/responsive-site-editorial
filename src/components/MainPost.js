import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Img from "./elements/Img";
import Title from "./elements/Title";

import theme from "../styles/theme";

const MainPost = (props) => {
  const navigate = useNavigate();
  const { title, id, text, img } = props;

  const handleNavigate = () => {
    navigate(`/${id}`);
  };

  return (
    <PostItem theme={theme}>
      <Img width={"100%"} ratio={"13/8"} src={img} alt={title} type={"link"} />
      <br />
      <Title text={title} />
      <TextWrapper>
        {text.split("\n").map((paragh, idx) => (
          <p key={idx}>{paragh}</p>
        ))}
      </TextWrapper>
      <button onClick={handleNavigate}>more</button>
    </PostItem>
  );
};
const PostItem = styled.li`
  width: 50%;
  border-bottom: 1px solid #ddd;
  padding-top: 3em;
  padding-bottom: 2em;
  &:nth-child(odd) {
    border-right: 1px solid #ddd;
    padding-right: 2em;
  }
  &:nth-child(even) {
    padding-left: 2em;
  }
  &:nth-last-child(2),
  &:nth-last-child(1) {
    border-bottom: none;
  }
  &:nth-child(-n + 2) {
    padding-top: 0;
  }
  @media ${({ theme }) => theme.device.desktopWide} {
    flex-grow: 1;
    width: calc(33.3% - 2em);
    border-right: 1px solid #ddd;
    &:nth-child(1),
    &:nth-child(4) {
      padding-left: 0;
      padding-right: 2em;
    }
    &:nth-child(2),
    &:nth-child(5) {
      width: calc(33.3%);
      padding-left: 2em;
      padding-right: 2em;
    }
    &:nth-child(3n) {
      padding-left: 2em;
      padding-right: 0;
      margin-right: 0;
      border-right: 0;
    }
    // 윗줄 3개
    &:nth-child(-n + 3) {
      padding-top: 0;
    }
    // 마지막 3개
    &:nth-last-child(1),
    &:nth-last-child(2),
    &:nth-last-child(3) {
      border-bottom: none;
    }
  }
`;

const TextWrapper = styled.div`
  padding-top: 1em;
  margin-bottom: 2em;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
export default MainPost;
