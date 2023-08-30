import React from "react";
import * as Styled from "./styled";
import GeLogoWhiteClean from "../img/GE/GeLogoWhiteClean.png";
import BorderOpsColor from "../img/BorderOps/BorderOpsColor.png"
import BorderOps from "../img/BorderOps/BorderOps.png"


export default function Header() {
  return (
    <>
      <Styled.MainContainer>
          <Styled.LogoContainer>
            <img src={BorderOps} alt="GELogoWhite" />
          </Styled.LogoContainer>
          <Styled.TitleContainer>
            <h2>IT Inventory</h2>
          </Styled.TitleContainer>
          <Styled.UserContainer>
            <button className="UserButton">
               <i class="fa-regular fa-user" style={{fontSize: "2em"}}></i>
            </button>
          </Styled.UserContainer>
      </Styled.MainContainer>
    </>
  );
}
