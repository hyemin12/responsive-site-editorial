import styled, { css } from "styled-components";
import Layout from "../components/Layout";
import SampleContent from "../components/elements/SampleContent";
import Title from "../components/elements/Title";
import { data } from "../data";
import HyperLink from "../components/elements/HyperLink";

import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaDribbble,
  FaTumblr,
} from "react-icons/fa";
import Ul from "../components/elements/Ul";

const Elements = () => {
  const sample = data.sampleContent;
  const lists = [
    "Dolor etiam magna etiam.",
    "Sagittis lorem eleifend.",
    "Felis dolore viverra.",
    "Dolor etiam magna etiam.",
    "Sagittis lorem eleifend.",
    "Felis dolore viverra.",
  ];
  const icons = [
    <FaTwitter />,
    <FaFacebookF />,
    <FaInstagram />,
    <FaGithub />,
    <FaDribbble />,
    <FaTumblr />,
  ];
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
            <Article border={"bottom"}>
              <Title text={"Text"} size={"1.2em"} padding={"1em 0"} />
              <P>
                This is <b>bold</b> and this is <strong>strong</strong>. This is{" "}
                <i>italic</i> and this is <em>emphasized</em>. This is
                <sup> superscript</sup> text and this is <sub>subscript</sub>{" "}
                text. This is <u> underlined</u> and this is code:
                <code> for (;;) &#123; ... &#125;</code>. Finally, this is a{" "}
                <a href="javascript:void(0)">link</a>.
              </P>
            </Article>

            <Article border={"bottom"}>
              <h2>Heading Level 2</h2>
              <h3>Heading Level 3</h3>
              <h4>Heading Level 4</h4>
            </Article>
            <Article>
              <p>
                Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida
                odio porttitor sem non mi integer non faucibus ornare mi ut ante
                amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem
                accumsan varius montes viverra nibh in adipiscing blandit tempus
                accumsan.
              </p>
              <br />
              <h3>Lists</h3>
              <Row>
                <Li item={2}>
                  <h4>Unordered</h4>
                  <Ul type={"unordered"} lists={lists.slice(0, 3)} />

                  <h4>Alternate</h4>
                  <Ul type={"alternate"} lists={lists.slice(0, 3)} />
                </Li>

                <Li item={2}>
                  <h4>Ordered</h4>
                  <Ul type={"ordered"} lists={lists} />
                  <h4>Icons</h4>
                  <Row>
                    {icons.map((icon, idx) => (
                      <HyperLink key={idx} text={icon} size={"1.2em"} />
                    ))}
                  </Row>
                </Li>
              </Row>
            </Article>
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
`;
const Li = styled.li`
  width: ${({ item }) => (item ? `calc((100% - 2em) / ${item})` : "100%")};
`;
const Article = styled.article`
  line-height: 2em;
  padding: 2em 0;
  ${({ border }) => border && " border-bottom: 1px solid #ccc; "};
`;
const P = styled.p`
  font-size: 0.92em;
  line-height: 1.6;
`;
const marginBottom = css`
  margin-bottom: 1em;
`;
export default Elements;
