import Title from "./Title";

const SampleContent = ({ title, titleSize, text }) => {
  return (
    <>
      <Title text={title} size={titleSize && titleSize} marginBottom={"1em"} />
      <p>{text}</p>
    </>
  );
};

export default SampleContent;
