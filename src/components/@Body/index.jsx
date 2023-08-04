import React from "react";
import * as Styled from "./styled"
import ShowPanel from "./@ShowPanel";
import SideBar from "./@SideBar";


export default function Body(){

    return(
        <>
        <Styled.MainContainer>
           <SideBar></SideBar>
            <ShowPanel></ShowPanel>
        </Styled.MainContainer>
        
        </>
    )

}