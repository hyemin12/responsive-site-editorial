import styled from "styled-components";
import Layout from "../components/Layout";
import SampleContent from "../components/elements/SampleContent";
import Title from "../components/elements/Title";
import { data } from "../data";
import HyperLink from "../components/elements/HyperLink";

import {
  FaSearch,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaDribbble,
  FaTumblr,
} from "react-icons/fa";

import Ul from "../components/elements/Ul";
import Definition from "../components/elements/Definition";
import DefaultBtn from "../components/elements/Buttons/DefaultBtn";
import PrimaryBtn from "../components/elements/Buttons/PrimaryBtn";
import IconBtn from "../components/elements/Buttons/IconBtn";

import Select from "../components/elements/Select";
import Radio from "../components/elements/Radio";
import Checkbox from "../components/elements/Checkbox";

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
        <br />
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
        <br />
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
              <Title text={"Text"} size={"1.2em"} />
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
            <Article>
              <h4>Definition</h4>
              {Array(3)
                .fill()
                .map((element, idx) => (
                  <Definition
                    key={`items${idx + 1}`}
                    title={`items${idx + 1}`}
                    text={
                      "Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Lorem ipsum dolor."
                    }
                  />
                ))}
            </Article>
            <Article>
              <h4>Actions</h4>
              <Row>
                <button className="primary">default</button>
                <button>default</button>
              </Row>
              <Row>
                <button className="primary small">small</button>
                <button className="small">small</button>
              </Row>
            </Article>
          </Li>
          <Li item={2}>
            <h3>Buttons</h3>
            <BtnRow>
              <PrimaryBtn text={"Primary"} />
              <DefaultBtn text={"default"} />
            </BtnRow>
            <BtnRow>
              <DefaultBtn size={"large"} text={"large"} />
              <DefaultBtn text={"default"} />
              <DefaultBtn size={"small"} text={"small"} />
            </BtnRow>
            <BtnRow>
              <PrimaryBtn size={"large"} text={"large"} />
              <PrimaryBtn text={"default"} />
              <PrimaryBtn size={"small"} text={"small"} />
            </BtnRow>
            <BtnRow>
              <PrimaryBtn type={"fit"} text={"fit"} />
              <DefaultBtn type={"fit"} text={"fit"} />
            </BtnRow>
            <BtnRow>
              <PrimaryBtn size={"small"} type={"fit"} text={"fit+small"} />
              <DefaultBtn size={"small"} type={"fit"} text={"fit+small"} />
            </BtnRow>
            <BtnRow>
              <IconBtn type={"primary"} icon={<FaSearch />} text={"icon"} />
              <IconBtn icon={<FaSearch />} text={"icon"} />
            </BtnRow>
            <BtnRow>
              <PrimaryBtn type={"disabled"} text={"primary"} />
              <DefaultBtn type={"disabled"} text={"default"} />
            </BtnRow>
            <h3>Form</h3>
            <BtnRow>
              <input style={{ width: "100%" }} placeholder="Name" />
              <input style={{ width: "100%" }} placeholder="Email" />
            </BtnRow>
            <BtnRow>
              <Select>
                <option value="">- Category -</option>
                <option value="option1">option1</option>
                <option value="option2">option2</option>
                <option value="option3">option3</option>
              </Select>
            </BtnRow>
            <BtnRow>
              <Li item={3}>
                <Radio id={"low"} name={"sample-radio"} check={"checked"} />
              </Li>
              <Li item={3}>
                <Radio id={"normal"} name={"sample-radio"} />
              </Li>
              <Li item={3}>
                <Radio id={"high"} name={"sample-radio"} />
              </Li>
            </BtnRow>
            <BtnRow>
              <Li item={2}>
                <Checkbox id={"Email me a copy"} />
              </Li>
              <Li item={2}>
                <Checkbox id={"I am a human"} check={"checked"} />
              </Li>
            </BtnRow>
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
const BtnRow = styled(Row)`
  gap: 1em;
  margin-bottom: 1em;
`;
const Li = styled.li`
  width: ${({ item }) => (item ? `calc((100% - 2em) / ${item})` : "100%")};
`;
const Article = styled.article`
  line-height: 2em;
  padding-top: 2em;
  ${({ border }) => border && " border-bottom: 1px solid #ccc; "};
  &:first-child {
    padding-top: 0;
    padding-bottom 2em;
  }
`;
const P = styled.p`
  font-size: 0.92em;
  line-height: 1.6;
`;

export default Elements;
