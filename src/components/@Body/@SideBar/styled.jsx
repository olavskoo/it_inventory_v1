import styled from "styled-components"

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 95%;
    background-color: #6400A0;
`
export const LinksContainer = styled.a`
    display: flex;
    width: 100%;
    height: 5%;
    color: #E4E4E4;
    &:hover{
        cursor: pointer;
        color: #A9A9A9;
    }
`
export const LinksIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
    height: 100%;
`
export const LinksText = styled.div`
    display: flex;
    font-size: 90%;
    align-items: center;
    width: 65%;
    height: 100%
`