
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;

    label {
        font-size: 1.4rem;
        font-weight: bold;
        color: var(--text-title);
    }

    input {
        width: 20rem;
        padding: 0.5rem;
        height: 2rem;
        border-radius: 0.25rem;
        border: 1px solid #d7d7d7;
        background: var(--text-input);
        font-weight: 400;
        font-size: 1rem;

        &::placeholder {
            color: var(--text-body)
        }
    }
`;