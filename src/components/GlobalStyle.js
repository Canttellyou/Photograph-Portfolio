import { createGlobalStyle } from "styled-components";



///Global colors
export const themeBlue = { "Blue_Pigment": "#24319e", "Cobalt_Blue": "#24449f", "secondary": "#F4E999", "primary": "#95662B" }

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background: #1b1b1b;
        font-family: 'Inter',sans-serif;
        overflow-x: hidden;
        scroll-behavior: smooth;
    }
    button{
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid #23d997;
        background: transparent;
        color: white;
        transition: all 0.4s ease;
                font-family: 'Inter',sans-serif;

        &:hover{
            background-color: #23d997;
            color: white;
        }
    }
    h2{
         font-weight: 300;
         font-size: 4rem;

    }
    h3{
        color: white;
    }
    h4{
        font-weight: bold;
        color: #23d997;
    }
   p{
   padding: 1.5rem 0;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
   }
span{
    font-weight: bold;
    color: #23d997;
}

a{
    font-size: 1.1rem;
}
`;

export default GlobalStyle;
