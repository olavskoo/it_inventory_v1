import React from "react";
import * as Styled from "./styled"

export default function Header (){
    return(
        <>
        <Styled.MainContainer>
            <Styled.LeftContainer>
                <Styled.LeftContent>
                    <a href="/"> <img src=".../img/GeLogoPurple.png" alt="GE Logo" /></a>
                </Styled.LeftContent>
            </Styled.LeftContainer>
            <Styled.RightContainer>
                <Styled.RightContent></Styled.RightContent>
            </Styled.RightContainer>
        </Styled.MainContainer>   
        </>
    )
    
}