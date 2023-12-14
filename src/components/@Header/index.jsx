import React from "react";
import * as Styled from "./styled";
import BorderOps from "../img/BorderOps/BorderOps.png"
import LogIn from "../@LogIn/LogIn";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { LOGED_USER_SELECTOR } from "../../store/LOCAL_DATA";
import LogOut from "../@LogIn/LogOut";
import DeleteModal from "../@Body/@ShowPanel/Tables/DeleteModal";


export default function Header() {

const LogedUser = useSelector(LOGED_USER_SELECTOR)
const user = ''

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
          <h4 style={{color: "white"}}>{LogedUser.sso === "223017842" ? "Andres Olaves" : LogedUser.sso === "212687717" ?  "Isamar Gonzalez" : LogedUser.sso === "223064820" ?  "Gustavo Saenz" : "User"}</h4>
          <LogOut/>
          <LogIn/>
          <DeleteModal/>
          </Styled.UserContainer>
      </Styled.MainContainer>
    </>
  );
}
