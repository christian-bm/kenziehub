import styled from "styled-components";

export const Container = styled.li`
    width: 95%;
    height: 48px;
    background: var(--grey-4);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    border-radius: 5px;
    cursor: pointer;


    span {
        color: var(--grey-1);
    }

    :hover {
        background: var(--grey-2);

        span {
            color: var(--grey-0);
        }
    }
`;
