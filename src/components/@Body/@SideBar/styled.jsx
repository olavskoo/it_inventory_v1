import styled from "styled-components"

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 95%;
`
export const LinksContainer = styled.div`
    display: flex
    flex-direction: column;
    width: 100%;
    height: 90%;
`
export const LinksContent = styled.button`
    display: flex;
    width: 100%;
    height: 8%;
    color: #6400A0;
    border: none;
    background: none;
    &:hover{
        cursor: pointer;
        color: #8D8D8D;
        border-bottom: 1px solid;
    }
`
export const LinksIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
    height: 100%;
    font-size: 1.2em;
`
export const LinksText = styled.div`
    display: flex;
    font-size: 90%;
    align-items: center;
    width: 65%;
    height: 100%;
    font-size: 1.2em;
`
export const Version = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;  
    width: 100%;
    height: 10%;
    color: #6400A0;
`