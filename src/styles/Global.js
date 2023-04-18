import { createGlobalStyle } from "styled-components";

// font-family: 'Open Sans', sans-serif;

const Global = createGlobalStyle`
  *{
    padding:0;
    margin:0;
    box-sizing:border-box
  }
  body{
    font-family: 'Roboto Slab', serif;
    color: #3D4449;
  }
`;
export default Global;
