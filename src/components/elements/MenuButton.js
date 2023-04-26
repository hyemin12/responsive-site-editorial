import { FaBars } from "react-icons/fa";
import styled from "styled-components";

const MenuButton = (props) => {
  return (
    <I onClick={props.func}>
      <FaBars />
    </I>
  );
};

const I = styled.i`
  font-size: 2em;
  position: absolute;
  top: 1em;
  left: 1em;
  cursor: pointer;
`;

export default MenuButton;
