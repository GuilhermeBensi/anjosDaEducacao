import styled from 'styled-components'

export const Table = styled.table`
    width: 100%;
    margin: 2rem 0;
    color: black;
    border: 1px solid var(--bg-dark-orange);
    border-collapse: collapse;
    border-spacing: 0;
    line-height: 1.4;
    font-weight: 600;
    font-size: 1.2em;

    thead > tr > th {
        padding: 0.75rem;
        border: 1px solid var(--bg-dark-orange);
        background-color: var(--bg-dark-orange);
    }

    tbody > tr > td {
        padding: 0.75rem;
        border: 1px solid var(--bg-dark-orange);
        background-color: var(--bg-orange);

        &:nth-child(even){
            background-color: var(--bg-light-orange);
        }
    }
`