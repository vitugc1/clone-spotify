import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    background: #000;
    padding: 0 2rem;
    

    display: flex;
    flex-direction: column;
    //gap: 1rem;
    img {
        width: 9rem;
        margin-top: 2rem;
    }

    nav {
        margin-top: 2rem;
        button {
        padding-top: 1rem;
        background-color: #000;
        color: #fff;
        border: 0;

        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 0.5rem;

        strong {
            font-size: 1rem;
        }
    }

    }
    
    
`;
