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
    display: block;
    background-color: #ddd;
    border-radius: 6px;
    padding: 0.5em 1em 0.25em 1em;
    padding-bottom: 0.25em;
    font-size: 1.3em;
    color: ${({ theme }) => theme.color.grey};
    // position: fixed;
    right: -88px;
  }
`;

export default MenuButton;
