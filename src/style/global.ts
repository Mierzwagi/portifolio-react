import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --purple-color: #C778DD;
        --gray-color: #ABB2BF;
        --backgroud-color: #282C33;
        --white-color: #FFFFFF;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        -webkit-font-smoonthing: antialiased;
    }

    border-style, input-security, textarea, button{
        font-family: "Fira Code", monospace;
    }


`;
