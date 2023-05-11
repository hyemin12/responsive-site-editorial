import styled from "styled-components";

import DefaultBtn from "./Buttons/DefaultBtn";
import PrimaryBtn from "./Buttons/PrimaryBtn";

import theme from "../../styles/theme";

const Textarea = ({ placeholder, name, rows }) => {
  return (
    <form>
      <TextareaStyle
        placeholder={placeholder}
        rows={rows && rows}
        style={{ width: "100%" }}
      ></TextareaStyle>
      <Row theme={theme}>
        <PrimaryBtn text={"Send message"} />
        <DefaultBtn text={"reset"} />
      </Row>
    </form>
  );
};
const TextareaStyle = styled.textarea`
  width: 100%;
  margin-bottom: 1em;
`;
const Row = styled.div`
  ${({ theme }) => theme.flexBox.flex()}
  gap:1em;
`;
export default Textarea;
