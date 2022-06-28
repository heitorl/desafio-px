import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: 0;
        outline: 0; 
    }

    :root{
        --g50: #FFFFFF;
        --g100: #F5F5F5;
        --g200: #BDBDBD;
        --white: #FAFAFA;
        --black: #000;
        --orange: #FF7E2E;
    }

    body{
        background-color: var(--g50);
        color: var(--black);
      
    
    }

    body, input, button, h1, h2, h3{
        font-family: "Poppins";
        font-size: 1rem;
    }
    button{
        cursor: pointer;
    }
    a{
        text-decoration: none;
    }

`;
