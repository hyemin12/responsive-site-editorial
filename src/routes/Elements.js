import styled from "styled-components";
import Layout from "../components/Layout";
import SampleContent from "../components/elements/SampleContent";
import Title from "../components/elements/Title";
import { data } from "../data";

const Elements = () => {
  const sample = data.sampleContent;
  return (
    <Layout>
      <Title text={"Elements"} size={"3.2em"} padding={"1.5em 0 0 0"} />
      <Section>
        <SampleContent
          title={sample[0].title}
          text={sample[0].text}
          titleSize={"1.6em"}
        />

        <Row>
          {sample.slice(0, 2).map((content) => (
            <Li item={2}>
              <SampleContent
                title={content.title}
                text={content.text}
                width={"50%"}
              />
            </Li>
          ))}
        </Row>

        <Row>
          {sample.slice(0, 3).map((content) => (
            <Li item={3}>
              <SampleContent
                title={content.title}
                text={content.text}
                width={"33%"}
              />
            </Li>
          ))}
        </Row>
      </Section>
      <Section>
        <Title text={"Elements"} size={"1.6em"} />
        <Row>
          <Li item={2}>
            <Title text={"Text"} size={"1.2em"} padding={"1em 0"} />
            <P>
              This is <b>bold</b> and this is <strong>strong</strong>. This is{" "}
              <i>italic</i> and this is <em>emphasized</em>. This is
              <sup> superscript</sup> text and this is <sub>subscript</sub>{" "}
              text. This is <u> underlined</u> and this is code:
              <code> for (;;) &#123; ... &#125;</code>. Finally, this is a{" "}
              <a href="javascript:void(0)">link</a>.
            </P>
          </Li>
        </Row>
      </Section>
    </Layout>
  );
};
const Section = styled.section`
  padding: 3em 0;
  border-bottom: 1px solid #ccc;
`;
const Row = styled.ul`
  display: flex;
  gap: 2em;
  padding-top: 2em;
`;
const Li = styled.li`
  width: ${({ item }) => (item ? `calc((100% - 2em) / ${item})` : "100%")};
`;
const P = styled.p`
  font-size: 0.92em;
  line-height: 1.6;
`;
export default Elements;
