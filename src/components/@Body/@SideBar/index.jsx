import React from "react";
import * as Styled from "./styled"


export default function SideBar(){

    return(
        <>
        <Styled.MainContainer>
            <Styled.LinksContainer><i class="fa-solid fa-laptop"></i>Computer</Styled.LinksContainer>
            <Styled.LinksContainer><i class="fa-solid fa-mobile-button"></i>Phones</Styled.LinksContainer>
            <Styled.LinksContainer><i class="fa-solid fa-print"></i>Printers</Styled.LinksContainer>
        </Styled.MainContainer>
        </>
    )
}