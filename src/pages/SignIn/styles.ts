import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--background);
`;

export const Content = styled.div`
    width: 28rem;
    height: 43rem;
    background: #191919;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    

    form  {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        
        img {
            margin-top: -3rem;
            width: 10rem;
            height: 10rem;
        }

        button {
            margin-top: 2rem;
            width: 15rem;
            height: 3rem;
            border-radius: 2rem;
            border: 0;

            font-size: 1rem;
            font-weight: bold;
            background-color: var(--player);

            transition: filter 0.3s;

            &:hover {
                filter: brightness(0.7);
            }
        }
    } 
    

    >div {
        margin-top: -7rem;
        align-items: stretch;

        .separator {
        font-size: 14px;
        color: #fff;
        //align-items: stretch;
        
        margin: 32px 0;
        display: flex;
        align-items: center;

            &::before {
                content: '';
                flex: 1;
                height: 2px;
                background: #fff;
                margin-right: 16px;
            }
            &::after {
                content: '';
                flex: 1;
                height: 2px;
                background: #fff;
                margin-left: 16px;
            }
        }   
        >button {
            margin-top: 1rem;
            width: 20rem;
            height: 3rem;
            border-radius: 2rem;
            border: 0;
            font-size: 1rem;
            font-weight: bold;

            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;

            transition: filter 0.3s;

            &:hover {
                filter: brightness(0.7);
            }
        }
        
        .button-facebook {
            background-color: var(--button-facebook);
        }

        .button-google {
            background-color: var(--button-google);
        }
    }
`;