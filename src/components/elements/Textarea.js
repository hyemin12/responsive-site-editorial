import styled from "styled-components";

import DefaultBtn from "./Buttons/DefaultBtn";
import PrimaryBtn from "./Buttons/PrimaryBtn";

import theme from "../../styles/theme";
import { useState } from "react";

const Textarea = ({ placeholder, name, rows }) => {
  const [state, setState] = useState();
  const onChange = (e) => {
    setState(e.target.value);
  };
  console.log(state);
  return (
    <form>
      <TextareaStyle
        placeholder={placeholder}
        rows={rows && rows}
        style={{ width: "100%" }}
        onChange={onChange}
      >
        {state}
      </TextareaStyle>
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
