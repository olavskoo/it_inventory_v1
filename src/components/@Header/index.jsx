import React from "react";
import * as Styled from "./styled"
import GeLogoWhite from "../img/GeLogoWhite.png"

export default function Header (){
    return(
        <>
        <Styled.MainContainer>
            <Styled.LeftContainer>
                <Styled.LeftContent>
                    <a href="/"> <img src={GeLogoWhite} alt="GE Logo" style={{width:"100%", height:"100%"}}/></a>
                </Styled.LeftContent>
            </Styled.LeftContainer>
            <Styled.RightContainer>
                <Styled.RightContent></Styled.RightContent>
            </Styled.RightContainer>
        </Styled.MainContainer>   
        </>
    )
    
}