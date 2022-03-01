import styled, { css } from "styled-components";

export const StyledButton = styled.button`
    background-color: ${({ color }) =>
        color === "primary"
            ? css`var(--primary)`
            : color === "grey-1"
            ? css`var(--grey-1)`
            : color === "grey-3" && css`var(--grey-3)`};
    color: var(--gray-0);
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 600;
`;
