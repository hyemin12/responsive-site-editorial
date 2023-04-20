import styled from "styled-components";

const Img = ({ src, alt, width, height }) => {
  return (
    <ImgWrapper width={width} height={height}>
      <Image src={src} alt={alt} />
    </ImgWrapper>
  );
};
const ImgWrapper = styled.div`
  flex-shrink: 0;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 6px;
  position: relative;
  overflow: hidden;
`;
const Image = styled.img`
  width: auto;
  height: 100%;
  position: Absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
`;
export default Img;
