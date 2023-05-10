import { useState } from "react";
import styled, { css } from "styled-components";

import theme from "../../styles/theme";

import { FaCheck, FaSearch } from "react-icons/fa";

const InputRadio = ({ id }) => {
  return (
    <Container>
      <Input
        type="radio"
        id={`radio-${id}`}
        value={`radio-${id}`}
        theme={theme}
      />
      <Label for={`radio-${id}`}>{id}</Label>
    </Container>
  );
};
const Container = styled.div`
  ${({ theme }) => theme.flexBox.flex()}
  gap:6px;
  color: ${({ theme }) => theme.color.grey};
  cursor: pointer;
`;
const Input = styled.input`
  background-color: #fff;
  border: 1px solid rgba(210, 215, 217, 0.75);
  border-radius: 50%;
  vertical-align: middle;
  appearance: none;
  position: relative;
  &:checked + label::before {
    content: ${(<FaCheck />)};
    width: 28px;
    height: 28px;
    background-color: ${({ theme }) => theme.color.default};
    border-color: ${({ theme }) => theme.color.default};
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
  }
  &:focus {
    border: 1px solid ${({ theme }) => theme.color.point};
  }
`;

const Label = styled.label`
  text-transform: capitalize;
`;
export default InputRadio;
