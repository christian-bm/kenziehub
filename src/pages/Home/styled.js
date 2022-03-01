import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    flex-direction: column;

    nav {
        display: flex;
        position: sticky;
        width: 100%;
        height: 70px;
        justify-content: space-between;
        align-content: center;
        align-items: center;
        padding: 0 13px;
        border-bottom: 2px solid var(--grey-3);

        figure {
            img {
                width: 105px;
            }
        }
    }
    header {
        display: flex;
        width: 100%;
        height: 120px;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-evenly;
        padding: 0 13px;
        border-bottom: 2px solid var(--grey-3);
    }
`;

export const Content = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    > div {
        display: flex;
        width: 90%;
        justify-content: space-between;
        margin: 25px 0;
    }
`;

export const UlStyled = styled.ul`
    background: var(--grey-2);
    width: 90%;
    height: 20px;
    border-radius: 8px;
`;
