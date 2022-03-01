import styled, { css } from "styled-components";

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
export const InputContainer = styled.div`
    background: var(--grey-2);
    border-radius: 8px;
    border: 2px solid transparent;
    padding: 0.5rem 1rem;
    width: 100%;
    display: flex;
    transition: 0.5s;

    &:focus-within {
        border-color: var(--grey-0);
    }

    ${(props) =>
        props.isErrored &&
        css`
            border-color: var(--negative);
        `}

    input {
        background: var(--grey-2) !important;
        align-items: center;
        flex: 1;
        border: 0;
        color: var(--grey-0) !important;
    }
`;
