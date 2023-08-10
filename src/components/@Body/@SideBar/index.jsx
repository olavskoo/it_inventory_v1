import React from "react";
import * as Styled from "./styled"


export default function SideBar(){

    return(
        <>
        <Styled.MainContainer>
          <Styled.LinksContainer>
          <Styled.LinksContent>
                <Styled.LinksIcon><i class="fa-solid fa-laptop"></i></Styled.LinksIcon>
                <Styled.LinksText>Computer</Styled.LinksText>
            </Styled.LinksContent>
                <Styled.LinksContent><Styled.LinksIcon><i class="fa-solid fa-mobile-screen-button"></i></Styled.LinksIcon>
                <Styled.LinksText>Phones</Styled.LinksText>
            </Styled.LinksContent>
                <Styled.LinksContent><Styled.LinksIcon><i class="fa-solid fa-print"></i></Styled.LinksIcon>
                <Styled.LinksText>Printers</Styled.LinksText>
            </Styled.LinksContent>
          </Styled.LinksContainer>
            <Styled.Version>Version 1.0</Styled.Version>
        </Styled.MainContainer>
        </>
    )
}