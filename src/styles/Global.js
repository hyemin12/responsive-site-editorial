import { createGlobalStyle } from "styled-components";
import theme from "./theme";

// font-family: 'Open Sans', sans-serif;

const GlobalStyle = createGlobalStyle`
  *{
    padding:0;
    margin:0;
    box-sizing:border-box
  }  body{
    font-family: 'Roboto Slab', serif;
    font-weight: 400;
    color: #3D4449;
  }
  b{
    color: ${theme.color.default};
  }
  strong{
    color: ${theme.color.default};
  }
  i {
    color: ${theme.color.grey};
  }
  code{
    background-color: #eee;
    padding:0.5em;
    margin:0 0.25em;
    border-radius:4px;
    border:1px solid #ddd;
    font-size:1.1em;
  }
  h1,h2,h3,h4{
    margin-bottom:1em;
  }
  h4{
    @media ${({ theme }) => theme.device.desktopWide}{
      font-size:1.3em !important;
    };
  }

  p {
    font-family: "Open Sans", sans-serif;
    color: ${({ theme }) => theme.color.grey};
    font-size: 0.9em;
    line-height: 1.6;
    @media ${({ theme }) => theme.device.desktopWide}{
      font-size:1em ;
    };
  }
  a {
    color: ${({ theme }) => theme.color.grey};
    text-decoration:none;
    transition:0.4s;
    &:hover{
      color: #f56a6a !important
    }
  }
  a {
    color: ${theme.color.point};
    text-decoration:underline dotted ${theme.color.point};
    transition:0.4s;
    &:hover{
      color: #f56a6a !important
    }
  }
  input, select {
    display:block;
    border: 1px solid rgba(210,215,217,0.75);   
    border-radius: 5px;
    padding:1em;
    &:focus {
      outline: 2px solid  #f56a6a;
      border-color: #f56a6a;
    }
  };
  select{
    padding-right: 2.75em;
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' preserveAspectRatio='none' viewBox='0 0 40 40'%3E%3Cpath d='M9.4,12.3l10.4,10.4l10.4-10.4c0.2-0.2,0.5-0.4,0.9-0.4c0.3,0,0.6,0.1,0.9,0.4l3.3,3.3c0.2,0.2,0.4,0.5,0.4,0.9 c0,0.4-0.1,0.6-0.4,0.9L20.7,31.9c-0.2,0.2-0.5,0.4-0.9,0.4c-0.3,0-0.6-0.1-0.9-0.4L4.3,17.3c-0.2-0.2-0.4-0.5-0.4-0.9 c0-0.4,0.1-0.6,0.4-0.9l3.3-3.3c0.2-0.2,0.5-0.4,0.9-0.4S9.1,12.1,9.4,12.3z' fill='rgba(210, 215, 217, 0.75)' /%3E%3C/svg%3E");
    background-size:1.25em;
    background-repeat:no-repeat;
    background-position: calc(100% - 1em) center;
    -webkit-appearance: none; 
    -moz-appearance: none;
    appearance: none;
    &:focus {
      outline: 2px solid  #f56a6a;
      border-color: #f56a6a;
    }
  }
  select::-ms-expand {
    display: none;
  }
  li{
    list-style:none;
  }
  button{
    height:4em;
    border-radius:6px;
    padding: 1em 2em;
    font-family: 'Roboto Slab', serif;
    font-size:0.7em;
    font-weight:700;
    letter-spacing:0.1em;
    text-transform:uppercase;
    transition:all 0.4s;
    cursor:pointer;
  }
`;
export default GlobalStyle;
