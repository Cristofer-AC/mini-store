import styled from 'styled-components'

export const Carousel = styled.div`
    display: flex;
    padding: 10px;
    gap: 15px;
    overflow: hidden;
`

export const Card = styled.div`
    width: 100px;
    box-shadow: 0px 1px 2px gray;

    & svg {
        display: inline
    }

    & p {
        margin: 10px;
    }

`

export const Image = styled.img`
    height: 100px;
    width: 100px;
`

export const Value = styled.p`
    text-align: center;

    & svg {
        position: relative;
        top: 2px;
        color: gold;
        height: 18px;
    }

`