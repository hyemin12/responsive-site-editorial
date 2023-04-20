import styled from "styled-components";

import Layout from "../components/Layout";
import Title from "../components/elements/Title";
import Img from "../components/elements/Img";

import theme from "../styles/theme";

import { FaGem, FaPaperPlane, FaRocket, FaSignal } from "react-icons/fa";
import Feature from "../components/Feature";

const Home = () => {
  const features = [
    {
      title: "Portitor ullamcorper",
      text: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.",
      icon: <FaGem />,
    },
    {
      title: "Sapien veroeros",
      text: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.",
      icon: <FaPaperPlane />,
    },
    {
      title: "Quam lorem ipsum",
      text: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.",
      icon: <FaRocket />,
    },
    {
      title: "Sed magna finibus",
      text: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.",
      icon: <FaSignal />,
    },
  ];
  return (
    <Layout>
      <MainSection theme={theme}>
        <div>
          <Title text={"Hi, I’m Editorial by HTML5 UP"} size={"3.3em"} />
          <SubTitle theme={theme}>
            A FREE AND FULLY RESPONSIVE SITE TEMPLATE
          </SubTitle>
          <P theme={theme}>
            Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
            aliquam facilisis ante interdum congue. Integer mollis, nisl amet
            convallis, porttitor magna ullamcorper, amet egestas mauris. Ut
            magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas.
            Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.
          </P>
          <button>Learn more</button>
        </div>

        <Img
          width={"33em"}
          height={"27em"}
          src={
            "https://images.unsplash.com/photo-1547692098-b139f1ea4cbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          }
          alt={"A FREE AND FULLY RESPONSIVE SITE TEMPLATE"}
        />
      </MainSection>

      {/* FEATURES */}
      <Section>
        <Title text={"Features"} size={"1.6em"} border={"bottom"} />
        <FeatureWrapper theme={theme}>
          {features.map((feature) => (
            <Feature {...feature} />
          ))}
        </FeatureWrapper>
      </Section>

      {/* Posts */}
      <Section>
        <Title text={"Ipsum sed Posts"} size={"1.6em"} border={"bottom"} />
      </Section>
    </Layout>
  );
};

const Section = styled.section`
  padding: 4em 0;
  border-bottom: 2px solid #ddd;
`;
const MainSection = styled(Section)`
  ${({ theme }) => theme.flexBox.flex("row", "start", "start")};
  gap: 4em;
`;
const SubTitle = styled.h4`
  padding: 1.5em 0;
  color: ${({ theme }) => theme.color.grey};
  font-weight: 400;
  text-transform: uppercase;
`;
const P = styled.p`
  margin-bottom: 3.25em;
`;
const FeatureWrapper = styled.ul`
  ${({ theme }) => theme.flexBox.flex("row", "start", "start")};
  gap: 2em;
  flex-wrap: wrap;
  padding-top: 4em;
`;

export default Home;
