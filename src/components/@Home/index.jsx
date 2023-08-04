import React from "react";
import * as Styled from "./styled"
import Header from "../@Header";
import Body from "../@Body";

export default function Home(){

    return(
        <>
        <Styled.MainContainer>
           <Header></Header>
           <Body></Body>
        </Styled.MainContainer>
        </>
    );
};