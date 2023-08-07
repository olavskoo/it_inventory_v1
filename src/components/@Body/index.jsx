import React from "react";
import * as Styled from "./styled"
import ShowPanel from "./@ShowPanel";
import SideBar from "./@SideBar";


export default function Body(){

    return(
        <>
        <Styled.MainContainer>
            <Styled.Left>
                <SideBar></SideBar>
            </Styled.Left>
            <Styled.Rigth>
             <ShowPanel></ShowPanel>
            </Styled.Rigth>
        </Styled.MainContainer>
        
        </>
    )

}