import styled from "styled-components";

import theme from "../styles/theme";
import { H3 } from "./elements/Title";
import { Image } from "./elements/Img";
import PrimaryBtn from "./elements/Buttons/PrimaryBtn";

// import Img from "./elements/Img";

const Intro = () => {
  return (
    <IntroSection theme={theme}>
      <div>
        <Title theme={theme}>Hi, I’m Editorial by HTML5 UP</Title>
        <SubTitle theme={theme}>
          A FREE AND FULLY RESPONSIVE SITE TEMPLATE
        </SubTitle>
        <P theme={theme}>
          Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
          aliquam facilisis ante interdum congue. Integer mollis, nisl amet
          convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna
          finibus nisi nec lacinia. Nam maximus erat id euismod egestas.
          Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.
        </P>
        <PrimaryBtn text={"Learn more"} />
      </div>

      <ImgWrapper>
        <Img
          src={
            "https://images.unsplash.com/photo-1547692098-b139f1ea4cbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          }
          alt={"A FREE AND FULLY RESPONSIVE SITE TEMPLATE"}
        />
      </ImgWrapper>
    </IntroSection>
  );
};
const IntroSection = styled.section`
  ${({ theme }) => theme.flexBox.flex("row", "start", "start")};
  gap: 4em;
  padding: 4em 0;
  border-bottom: 2px solid #ddd;
  @media ${({ theme }) => theme.device.desktopWide} {
    padding: 6em 0;
  }
  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column-reverse;
  }
`;
const Title = styled(H3)`
  font-size: 3.3em;
  @media ${({ theme }) => theme.device.desktopWide} {
    font-size: 4.3em;
  }
  @media ${({ theme }) => theme.device.tabletPortrait} {
    font-size: 3.1em;
  }
`;
const SubTitle = styled.h4`
  margin-bottom: 1.5em;
  color: ${({ theme }) => theme.color.grey};
  font-size: 1em;
  font-weight: 400;
  text-transform: uppercase;
  @media ${({ theme }) => theme.device.desktopWide} {
    font-size: 1.2em;
  }
  @media ${({ theme }) => theme.device.tabletPortrait} {
    font-size: 0.9em;
  }
`;
const P = styled.p`
  margin-bottom: 2em;
  @media ${({ theme }) => theme.device.desktopWide} {
    font-size: 1.1em;
  }
`;
const ImgWrapper = styled.div`
  flex-shrink: 0;
  width: 50%;
  height: 100%;
  border-radius: 6px;
  aspect-ratio: 88 / 69;
  position: relative;
  overflow: hidden;
  @media ${({ theme }) => theme.device.tabletPortrait} {
    aspect-ratio: 166/304;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    aspect-ratio: 61 / 48;
  }
`;
const Img = styled(Image)`
  width: auto;
`;
export default Intro;
