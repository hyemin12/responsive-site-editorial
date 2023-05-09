import styled, { css } from "styled-components";
import { Primary } from "./PrimaryBtn";
import { Default } from "./DefaultBtn";

const IconBtn = ({ text, type, icon }) => {
  if (type === "primary")
    return (
      <PrimaryBtn>
        {icon}
        {text}
      </PrimaryBtn>
    );
  return (
    <DefaultBtn>
      {icon}
      {text}
    </DefaultBtn>
  );
};
const style = css`
  display: flex;
  align-items: center;
  gap: 0.5em;
`;
const PrimaryBtn = styled(Primary)`
  ${style}
`;
const DefaultBtn = styled(Default)`
  ${style}
`;
export default IconBtn;
