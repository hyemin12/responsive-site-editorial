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

import List from "../components/elements/List";
import Definition from "../components/elements/Definition";
import DefaultBtn from "../components/elements/Buttons/DefaultBtn";
import PrimaryBtn from "../components/elements/Buttons/PrimaryBtn";
import IconBtn from "../components/elements/Buttons/IconBtn";

import Select from "../components/elements/Select";
import Radio from "../components/elements/Radio";
import Checkbox from "../components/elements/Checkbox";
import Textarea from "../components/elements/Textarea";
import Img from "../components/elements/Img";
import Pagenation from "../components/Pagenation";
import { useState } from "react";
import Table from "../components/elements/Table";
import TableTr from "../components/elements/TableTr";
import FloatImgText from "../components/elements/FloatImgText";
import BoxText from "../components/elements/BoxText";

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
  const imgList = [
    "https://images.unsplash.com/photo-1589656966895-2f33e7653819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1497752531616-c3afd9760a11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://plus.unsplash.com/premium_photo-1668013649592-a3fe7d578c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1181&q=80",
  ];
  const imgList2 = [...imgList].slice(0, 2);
  imgList2.unshift(imgList[2]);
  const imgList3 = [...imgList2].slice(0, 2);
  imgList3.unshift(imgList[1]);

  const [currentPage, setCurrentPage] = useState(1);

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
                <a href="{() => false}">link</a>.
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
                  <List type={"unordered"} lists={lists.slice(0, 3)} />

                  <h4>Alternate</h4>
                  <List type={"alternate"} lists={lists.slice(0, 3)} />
                </Li>

                <Li item={2}>
                  <h4>Ordered</h4>
                  <List type={"ordered"} lists={lists} />
                  <h4>Icons</h4>
                  <Row justify={"space-between"} gap={"0"}>
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
              <BtnRow>
                <PrimaryBtn text={"default"} />
                <DefaultBtn text={"default"} />
              </BtnRow>
              <BtnRow>
                <PrimaryBtn size={"small"} text={"small"} />
                <DefaultBtn size={"small"} text={"small"} />
              </BtnRow>
              <BtnRow>
                <Li item={2}>
                  <PrimaryBtn text={"default"} />
                </Li>
                <Li item={2}>
                  <PrimaryBtn size={"small"} text={"small"} />
                </Li>
              </BtnRow>
              <BtnRow>
                <Li item={2}>
                  <DefaultBtn text={"default"} />
                </Li>
                <Li item={2}>
                  <DefaultBtn size={"small"} text={"small"} />
                </Li>
              </BtnRow>
              <BtnRow>
                <PrimaryBtn fit={true} text={"default"} />
                <PrimaryBtn size={"small"} fit={true} text={"small"} />
              </BtnRow>
              <BtnRow>
                <DefaultBtn fit={true} text={"default"} />
                <DefaultBtn size={"small"} fit={true} text={"small"} />
              </BtnRow>
            </Article>
            <Article>
              <h3>Pagination</h3>
              <Pagenation
                page={currentPage}
                setPage={setCurrentPage}
                pageLength={7}
              />
            </Article>

            <Article>
              <h3>Blockquote</h3>
              <blockquote cite="">
                Lorem ipsum dolor vestibulum ante ipsum primis in faucibus
                vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
                adipiscing accumsan eu faucibus. Integer ac pellentesque
                praesent. Lorem ipsum dolor. Lorem ipsum dolor vestibulum ante
                ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis
                iaculis volutpat ac adipiscing accumsan eu faucibus.
              </blockquote>
            </Article>
            {/* Table */}
            <Article>
              <h3>Table</h3>
              <h4>Default</h4>
              <Table thead={["name", "description", "price"]}>
                <TableTr
                  data={[
                    "Item1",
                    "Ante turpis integer aliquet porttitor.",
                    "29.99",
                  ]}
                />
                <TableTr
                  data={[
                    "Item2",
                    "Vis ac commodo adipiscing arcu aliquet.",
                    "19.99",
                  ]}
                />
                <TableTr
                  data={[
                    "Item3",
                    "Morbi faucibus arcu accumsan lorem.",
                    "29.99",
                  ]}
                />
                <TableTr
                  data={["Item4", "Vitae integer tempus condimentum.", "19.99"]}
                />
                <TableTr
                  data={[
                    "Item5",
                    "Ante turpis integer aliquet porttitor.",
                    "29.99",
                  ]}
                />
              </Table>

              <h4>Alternate</h4>
              <Table
                type={"alternate"}
                thead={["name", "description", "price"]}
              >
                <TableTr
                  data={[
                    "Item1",
                    "Ante turpis integer aliquet porttitor.",
                    "29.99",
                  ]}
                />
                <TableTr
                  data={[
                    "Item2",
                    "Vis ac commodo adipiscing arcu aliquet.",
                    "19.99",
                  ]}
                />
                <TableTr
                  data={[
                    "Item3",
                    "Morbi faucibus arcu accumsan lorem.",
                    "29.99",
                  ]}
                />
                <TableTr
                  data={["Item4", "Vitae integer tempus condimentum.", "19.99"]}
                />
                <TableTr
                  data={[
                    "Item5",
                    "Ante turpis integer aliquet porttitor.",
                    "29.99",
                  ]}
                />
              </Table>
            </Article>
          </Li>
          {/* Elements 오른쪽 (버튼, 이미지) */}
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
              <PrimaryBtn fit={true} text={"fit"} />
              <DefaultBtn fit={true} text={"fit"} />
            </BtnRow>
            <BtnRow>
              <PrimaryBtn size={"small"} fit={true} text={"fit+small"} />
              <DefaultBtn size={"small"} fit={true} text={"fit+small"} />
            </BtnRow>
            <BtnRow>
              <IconBtn type={"primary"} icon={<FaSearch />} text={"icon"} />
              <IconBtn icon={<FaSearch />} text={"icon"} />
            </BtnRow>
            <BtnRow>
              <PrimaryBtn disabled={true} text={"primary"} />
              <DefaultBtn disabled={true} text={"default"} />
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
            <TextareaWrapper>
              <Textarea placeholder={"Enter yout message"} rows={6} />
            </TextareaWrapper>

            <Article>
              <h3>Image</h3>
              <h4>Fit</h4>
              <Img
                src="https://plus.unsplash.com/premium_photo-1669316982093-b2ed20cc82ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1197&q=80"
                alt="sample image"
                width={"100%"}
              />
              <br />
              <ImgRow>
                {imgList.map((img) => (
                  <Li item={3}>
                    <Img src={img} alt="sample image" width={"100%"} />
                  </Li>
                ))}

                {imgList2 &&
                  imgList2.map((img) => (
                    <Li item={3}>
                      <Img src={img} alt="sample image" width={"100%"} />
                    </Li>
                  ))}

                {imgList3.map((img) => (
                  <Li item={3}>
                    <Img src={img} alt="sample image" width={"100%"} />
                  </Li>
                ))}
              </ImgRow>
            </Article>
            <Article>
              <h4>Left & Right</h4>
              <FloatImgText
                floatDirection={"left"}
                src={
                  "https://plus.unsplash.com/premium_photo-1669316982093-b2ed20cc82ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
                }
                alt={"img-sample"}
                text={
                  "Lorem ipsum dolor sit accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent."
                }
              />

              <br />
              <FloatImgText
                floatDirection={"right"}
                src={
                  "https://plus.unsplash.com/premium_photo-1669316982093-b2ed20cc82ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
                }
                alt={"img-sample"}
                text={
                  "Lorem ipsum dolor sit accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent."
                }
              />
            </Article>
            <Article>
              <h3>Box</h3>
              <BoxText
                text={
                  "Felis sagittis eget tempus primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Magna sed etiam ante ipsum primis in faucibus vestibulum."
                }
              />
            </Article>
            <Article>
              <h3>Preformatted</h3>
              <code></code>
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
  gap: ${({ gap }) => (gap ? gap : "2em")};
  justify-content: ${({ justify }) => (justify ? "space-between" : "start")};
`;
const BtnRow = styled(Row)`
  gap: 1em;
  margin-bottom: 1em;
`;
const ImgRow = styled(Row)`
  gap: 1em;
  flex-wrap: wrap;
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

const TextareaWrapper = styled.div`
  form {
    width: 100%;
  }
`;

export default Elements;
