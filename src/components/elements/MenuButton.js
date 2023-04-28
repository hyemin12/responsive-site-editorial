import styled from "styled-components";

import theme from "../../styles/theme";

import { FaBars } from "react-icons/fa";

const MenuButton = (props) => {
  return (
    <I onClick={props.func} theme={theme}>
      <FaBars />
    </I>
  );
};

const I = styled.i`
  font-size: 2em;
  position: absolute;
  top: 1em;
  right: -60px;
  cursor: pointer;
  @media ${({ theme }) => theme.device.mobile} {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    padding: 0.5em 1em 0.25em 1em;
    padding-bottom: 0.25em;
    font-size: 1.3em;
    color: ${({ theme }) => theme.color.grey};
    right: -88px;
  }
`;

export default MenuButton;
