import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const Img = ({ type, src, alt, width, height, ratio, path, imgWidth }) => {
  if (type === "link")
    return (
      <ImgLink width={width} ratio={ratio} to={path}>
        <Image src={src} alt={alt} type={type} />
      </ImgLink>
    );
  return (
    <ImgWrapper width={width} height={height} ratio={ratio}>
      <Image src={src} alt={alt} type={type} imgWidth={imgWidth} />
    </ImgWrapper>
  );
};
export const ImgStyle = css`
  flex-shrink: 0;
  display: block;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 6px;
  aspect-ratio: ${({ ratio }) => ratio};
  position: relative;
  overflow: hidden;
`;
const ImgWrapper = styled.div`
  ${ImgStyle}
`;
const ImgLink = styled(Link)`
  ${ImgStyle}
`;
export const Image = styled.img`
  display: block;
  width: ${({ imgWidth }) => (imgWidth ? "auto" : "100%")};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.4s;
  ${({ type }) =>
    type === "link" &&
    `&:hover {
    transform: translate(-50%, -50%) scale(1.1);
  }`}
`;
export default Img;
