import styled from "styled-components";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Title from "../components/elements/Title";
import Img from "../components/elements/Img";
import theme from "../styles/theme";

const Home = () => {
  return (
    <Layout>
      <Section theme={theme}>
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
      </Section>
      <Section>
        <Title />
      </Section>
    </Layout>
  );
};

const Section = styled.section`
  ${({ theme }) => theme.flexBox.flex("row", "start", "start")};
  gap: 4em;
  padding: 4em 0;
`;
const SubTitle = styled.h4`
  padding: 1.5em 0;
  color: ${({ theme }) => theme.color.grey};
  font-weight: 400;
  text-transform: uppercase;
`;
const P = styled.p`
  margin-bottom: 3.25em;
  font-family: "Open Sans", sans-serif;
  color: ${({ theme }) => theme.color.grey};
  font-size: 0.9em;
  line-height: 1.6;
`;
export default Home;
