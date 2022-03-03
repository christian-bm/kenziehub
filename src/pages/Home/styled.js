import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    .container-div-nav {
        border-bottom: 2px solid var(--grey-3);
        width: 100%;
        display: flex;
        justify-content: center;
        height: 70px;
        position: fixed;
        top: 0;
        background: var(--grey-4);

        nav {
            display: flex;
            height: 70px;
            justify-content: space-between;
            align-content: center;
            align-items: center;
            padding: 0 13px;
            width: 100%;
            max-width: 780px;

            figure {
                img {
                    width: 105px;
                }
            }

            button {
                width: 50px;
                height: 30px;
                font-weight: 600;
                font-size: 12px;
                border-radius: 3px;
            }
        }
    }
    .container-div-header {
        display: flex;
        justify-content: center;
        width: 100%;
        margin-top: 70px;
        border-bottom: 2px solid var(--grey-3);

        header {
            display: flex;
            width: 100%;
            height: 120px;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-evenly;
            padding: 0 13px;
            max-width: 780px;

            h1 {
                font-size: 18px;
            }

            span {
                color: var(--grey-1);
            }
        }
    }


    @media (min-width: 768px) {
        .container-div-header {
            header {
                display: flex;
                justify-content: space-between;
                flex-direction: row;
                align-items: center;
            }
        }
    }
`;

export const Content = styled.main`
    width: 100%;
    max-width: 780px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 13px;

    > div {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        margin: 25px 0;

        h2 {
            font-weight: 500;
        }

        button {
            width: 32px;
            height: 32px;
            font-size: 26px;

            svg {
                transform: translateY(2px);
            }
        }
    }
`;

export const UlStyled = styled.ul`
    background: var(--grey-3);
    width: 100%;
    min-height: 20px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 22px 0px;

    li + li {
        margin-top: 22px;
    }

    p {
        font-size: 14px;
    }
`;
