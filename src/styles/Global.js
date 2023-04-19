import { createGlobalStyle } from "styled-components";

// font-family: 'Open Sans', sans-serif;

const GlobalStyle = createGlobalStyle`
  *{
    padding:0;
    margin:0;
    box-sizing:border-box
  }
  body{
    font-family: 'Roboto Slab', serif;
    font-weight: 400;
    color: #3D4449;
  }
  a {
    color: #7f888f;
    text-decoration:none;
    transition:0.4s;
    &:hover{
      color: #f56a6a !important
    }
  }
`;
export default GlobalStyle;
