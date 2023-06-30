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
    @media ${theme.device.desktopWide}{
      font-size:1.3em !important;
    };
  }

  p {
    font-family: "Open Sans", sans-serif;
    color: ${theme.color.grey};
    font-size: 0.9em;
    line-height: 1.6;
    @media ${theme.device.desktopWide}{
      font-size:1em ;
    };
    @media ${theme.device.tablet}{
      font-size:0.8em;
    }
  }
  // a {
  //   color: ${theme.color.grey};
  //   text-decoration:none;
  //   transition:0.4s;
  //   &:hover{
  //     color: #f56a6a !important
  //   }
  // }
  a {
    color: ${theme.color.point};
    text-decoration:underline dotted ${theme.color.point};
    transition:0.4s;
    &:hover{
      color: #f56a6a !important
    }
  };
  img {object-fit:cover;}

  input, select ,textarea {
    display:block;
    border: 1px solid rgba(210,215,217,0.75);   
    border-radius: 5px;
    padding:1em;
    font-family: "Open Sans", sans-serif;
    &:focus {
      outline: 2px solid  #f56a6a;
      border-color: #f56a6a;
    }
  };
  label{
    font-family: "Open Sans", sans-serif;
    font-size:0.9em;
    @media ${theme.device.tablet}{
      font-size:0.8em;
    }

  }
  li{
    list-style:none;
  };
  button{
    height: 4em;
    border-radius:6px;
    padding: 1em 2em;
    font-family: 'Roboto Slab', serif;
    font-size:0.7em;
    font-weight:700;
    letter-spacing:0.1em;
    text-transform:uppercase;
    transition:all 0.4s;
    cursor:pointer;
    @media ${({ theme }) => theme.device.desktopWide} {
      font-size: 0.9em;
    }
  }
  blockquote{
    padding-left:2em;
    border-left:3px solid #ccc;
    color:${theme.color.grey};
    font-family:  "Open Sans", sans-serif;
    font-size:0.9em;
    font-style:italic;
    line-height:1.6;
    @media ${theme.device.tablet}{
      font-size:0.8em;
    }
  }
  table{
    border-collapse: collapse;
    font-family: "Open Sans", sans-serif;
    font-size: 0.9em;
  }
  tr {
    border-bottom:1px solid  rgba(210, 215, 217); 
    &:last-child{ 
      border-bottom:none; 
    }
  }
  th, td {
    padding: 0.5em 1em ;
    color:  ${theme.color.grey};
    @media ${theme.device.tablet}{
      font-size:0.9em;
    }
   
  }
`;
export default GlobalStyle;
