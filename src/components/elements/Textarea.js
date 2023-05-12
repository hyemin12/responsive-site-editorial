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

  const onSubmit = (e) => {
    e.preventDefault();
    if (state === "" || !state) return alert("내용을 입력하세요!");
    alert("전송되었습니다!");
    setState("");
  };

  const onReset = () => {
    setState("");
  };

  return (
    <form onSubmit={onSubmit}>
      <TextareaStyle
        placeholder={placeholder}
        rows={rows && rows}
        style={{ width: "100%" }}
        onChange={onChange}
      >
        {state}
      </TextareaStyle>
      <Row theme={theme}>
        <PrimaryBtn type="submit" text={"Send message"} />
        <DefaultBtn type="reset" text={"reset"} onClick={onReset} />
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
