import styled from "styled-components";

export const Container = styled.div`
    background: var(--grey-2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    height: 50px;
    margin-bottom: 15px;
    border-radius: 5px 5px 0 0;

    h3 {
        font-size: 14px;
    }
`;

export const ContentForm = styled.form`
    padding: 10px;

    .div-buttons {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 70px;

        button {
            height: 40px;
            font-size: 16px;
        }

        

        .button-alt {
            width: 160px;
        }

        .button-delete {
            width: 90px;
        }
    }
`;
