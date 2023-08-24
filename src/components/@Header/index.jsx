import React from "react";
import * as Styled from "./styled";
import GeLogoWhite from "../img/GE/GeLogoWhite.png";
import BorderOpsColor from "../img/BorderOps/BorderOpsColor.png"

export default function Header() {
  return (
    <>
      <Styled.MainContainer>
        <Styled.LeftContainer>
          <Styled.LeftContent>
            <a href="/">
              {" "}
              <img
                src={BorderOpsColor}
                alt="GE Logo"
                style={{ width: "100%", height: "100%" }}
              />
            </a>
          </Styled.LeftContent>
        </Styled.LeftContainer>
        <Styled.RightContainer>
          <Styled.RightContent>
            <Styled.RightContentText>User</Styled.RightContentText>
            <Styled.RightContentIcon><i class="fa-solid fa-user" style={{fontSize: "2em"}}></i></Styled.RightContentIcon>
          </Styled.RightContent>
        </Styled.RightContainer>
      </Styled.MainContainer>
    </>
  );
}
