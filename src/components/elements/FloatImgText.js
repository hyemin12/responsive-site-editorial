import styled from "styled-components";

const FloatImgText = ({ src, alt, text, floatDirection }) => {
  return (
    <div>
      <ImgWrapper floatDirection={floatDirection}>
        <img src={src} alt={alt} style={{ display: "block" }} />
      </ImgWrapper>
      <p>{text}</p>
    </div>
  );
};
const ImgWrapper = styled.div`
  float: ${({ floatDirection }) => floatDirection};
  border-radius: 6px;
  ${({ floatDirection }) =>
    floatDirection === "left" ? "margin-right: 1.5em;" : "margin-left: 1.5em;"}
  margin-bottom: 1em;
  overflow: hidden;
`;
export default FloatImgText;
