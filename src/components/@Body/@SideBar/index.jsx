import React from "react";
import * as Styled from "./styled"
import { useDispatch } from "react-redux";
import { LOCAL_DATA_ACTIONS } from "../../../store/LOCAL_DATA";


export default function SideBar(){

    const dispatch = useDispatch();

    return(
        <>
        <Styled.MainContainer>
          <Styled.LinksContainer>
          <Styled.LinksContent onClick={()=>dispatch(LOCAL_DATA_ACTIONS.SetTable("Laptop"))}>
                <Styled.LinksIcon><i class="fa-solid fa-laptop"></i></Styled.LinksIcon>
                <Styled.LinksText>Computer</Styled.LinksText>
            </Styled.LinksContent>
                <Styled.LinksContent onClick={()=>dispatch(LOCAL_DATA_ACTIONS.SetTable("Phone"))}>
                <Styled.LinksIcon><i class="fa-solid fa-mobile-screen-button"></i></Styled.LinksIcon>
                <Styled.LinksText>Phones</Styled.LinksText>
            </Styled.LinksContent>
                <Styled.LinksContent onClick={()=>dispatch(LOCAL_DATA_ACTIONS.SetTable("Printer"))}>
                <Styled.LinksIcon><i class="fa-solid fa-print"></i></Styled.LinksIcon>
                <Styled.LinksText>Printers</Styled.LinksText>
            </Styled.LinksContent>
          </Styled.LinksContainer>
            <Styled.Version>Version 1.0</Styled.Version>
        </Styled.MainContainer>
        </>
    )
}