import React from "react";
import * as Styled from "./styled"


export default function SideBar(){

    return(
        <>
        <Styled.MainContainer>
            <Styled.LinksContainer>Computer</Styled.LinksContainer>
            <Styled.LinksContainer>Phones</Styled.LinksContainer>
            <Styled.LinksContainer>Printers</Styled.LinksContainer>
        </Styled.MainContainer>
        </>
    )
}