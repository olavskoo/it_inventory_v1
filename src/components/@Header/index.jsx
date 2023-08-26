import React from "react";
import * as Styled from "./styled";
import GeLogoWhiteClean from "../img/GE/GeLogoWhiteClean.png";
import BorderOpsColor from "../img/BorderOps/BorderOpsColor.png"
import { LaptopForm } from "../@Body/@Forms";
import {ModalWrapper } from "@carbon/react"

export default function Header() {
  return (
    <>
      <Styled.MainContainer>
          <Styled.LogoContainer>
            <img src={GeLogoWhiteClean} alt="GELogoWhite" />
          </Styled.LogoContainer>
          <Styled.TitleContainer>
            <h2>IT Inventory</h2>
          </Styled.TitleContainer>
          <Styled.UserContainer>
            <ModalWrapper
            buttonTriggerText="Launch modal"
            modalHeading="Modal heading"
            modalLabel="Label">
              <LaptopForm/>
            </ModalWrapper>
          </Styled.UserContainer>
      </Styled.MainContainer>
    </>
  );
}
