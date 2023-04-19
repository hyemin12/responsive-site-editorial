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
  h1,h2,h3,h4,h5,h6{
    display:inline-block;
  }
  a {
    color: #7f888f;
    text-decoration:none;
    transition:0.4s;
    &:hover{
      color: #f56a6a !important
    }
  }
  input {
    border: 1px solid rgba(210,215,217,0.75);   border-radius: 5px;
    padding:1em;
    &:focus {
      outline: 2px solid  #f56a6a;
      border-color: #f56a6a;
    }
  }
  li{
    list-style:none;
  }
`;
export default GlobalStyle;
