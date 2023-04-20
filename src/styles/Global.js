import { createGlobalStyle } from "styled-components";
import theme from "./theme";

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
  p {
    font-family: "Open Sans", sans-serif;
    color: ${({ theme }) => theme.color.grey};
    font-size: 0.9em;
    line-height: 1.6;
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
    border: 1px solid rgba(210,215,217,0.75);   
    border-radius: 5px;
    padding:1em;
    &:focus {
      outline: 2px solid  #f56a6a;
      border-color: #f56a6a;
    }
  }
  li{
    list-style:none;
  }
  button{
    background-color:transparent;
    padding:1em 2em;
    border: 3px solid  #f56a6a;
    border-radius:6px;
    font-family: 'Roboto Slab', serif;
    color:#f56a6a;
    font-size:0.7em;
    font-weight:700;
    letter-spacing:0.1em;
    text-transform:uppercase;
    transition:0.4s;
    cursor:pointer;
    &:hover{
      background-color: rgba(245,106,106,0.05);
    }
  }
`;
export default GlobalStyle;
