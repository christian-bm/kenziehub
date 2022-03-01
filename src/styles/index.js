import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing:border-box;
        outline: 0;
    }

    :root{
        --primary: #FF577F;
        --primary-focus: #FF427F;
        --primary-negative: #59323F;
        --grey-0: #F8F9FA;
        --grey-1: #868E96;
        --grey-2: #343B41;
        --grey-3: #212529;
        --grey-4: #121214;
        --sucess: #3FE864;
        --negative: #E83F5B;
        
        --toastify-toast-background: var(--grey-2);
        --toastify-color-success: var(--sucess);
        --toastify-color-error: var(--negative);
        --toastify-icon-color-success: var(--sucess);
        --toastify-icon-color-error: var(--negative);
    }

    body{
        background: var(--grey-4);
        color: var(--grey-0);
        font-family: 'Inter', sans-serif;
        font-weight: normal;
        font-size: 12px;
    }

    h1,h2,h3,h4,h5,h6{
        font-weight: bold;
        font-size: 16px;
    }
    
    button{
        cursor: pointer;
    }

    option{
        background:var(--grey-2);
        height: 25px;
        border: 1px solid white;
    }

`;
