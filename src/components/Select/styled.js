import styled from "styled-components";

export const Container = styled.div`
    text-align: initial;

    label {
        color: var(--grey-0);
    }

    div + div {
        margin-top: 10px;
        span {
            color: var(--negative);
        }
    }
`;

export const Content = styled.div`
    background: var(--grey-2);
    border-radius: 8px;
    border: 2px solid transparent;
    padding: 0.5rem 1rem;
    width: 100%;
    display: flex;
    padding: 0;
    height: 35px;
    transition: 0.5s;

    &:focus-within {
        border-color: var(--grey-0);
    }

    select {
        background: transparent;
        align-items: center;
        flex: 1;
        border: 0;
        color: var(--grey-0);
        border-radius: 8px;

        option {
            background: var(--grey-2);
        }
    }
`;
