import styled from "styled-components";

export const LogIn = styled.div`
    & .cds--btn{
        border-radius: 2em;
        margin-right: .5em; 
        background-color: #6400A0;
    } 
`
export const HeaderButton = styled.div`
    & .cds--modal-header__heading{
        color: #6400A0;
    }
    & .cds--modal-close{
        border: none;
    }
    &:hover .cds--modal-close{
        cursor: auto;
        background-color: #f4f4f4;
    }
    & .cds--modal-close__icon{
        fill: none;
    }
`