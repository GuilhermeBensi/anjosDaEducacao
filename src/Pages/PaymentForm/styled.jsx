import styled from 'styled-components'
import Card from 'react-credit-cards'
import "react-credit-cards/es/styles-compiled.css"

export const Title = styled.h1`
    position: relative;
    color: var(--bg-darker-orange);
    font-size: 4rem;
    font-weight: 800;
    padding-top: 2rem;
   
    @media only screen and (max-width: 1200px) {
        font-size: 3rem;
    }

    @media only screen and (max-width: 900px) {
        font-size: 2rem;
    }

    @media only screen and (max-width: 600px) {
        font-size: 1.5rem;
        padding-top: 4rem;
    }
`

export const Container = styled.div`
    display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 4rem;
    justify-content: center;
    align-content: stretch;

    width: 100%;
    padding: 0 3rem;
    margin: 5rem 0;
`

export const CardVisualizer = styled(Card)`
    width: 100%;
    align-self: center;
`

export const Form = styled.form`
    position: relative;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    padding: 5rem;
    margin: 5rem 1rem;
    border-radius: 2rem;
    background: linear-gradient(to left bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.5));
    box-shadow:0 0.5rem 1rem rgba(0, 0, 0, 0.3);
`