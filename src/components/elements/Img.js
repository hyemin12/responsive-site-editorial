import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const Img = ({
  type,
  src,
  alt,
  width,
  height,
  ratio,
  path,
  imgWidth,
  imgHeight,
}) => {
  if (type === "link")
    return (
      <ImgLink width={width} ratio={ratio} to={path}>
        <Image src={src} alt={alt} type={type} />
      </ImgLink>
    );
  return (
    <ImgWrapper width={width} height={height} ratio={ratio}>
      <Image
        src={src}
        alt={alt}
        type={type}
        imgWidth={imgWidth}
        imgHeight={imgHeight}
      />
    </ImgWrapper>
  );
};
export const ImgStyle = css`
  // flex-shrink: 0;
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
  ${({ imgHeight }) => imgHeight && `height: ${imgHeight}`};
  transition: 0.4s;
  ${({ type }) =>
    type === "link" &&
    `&:hover {
   transform:  scale(1.1);
   
  }`}
`;
export default Img;
