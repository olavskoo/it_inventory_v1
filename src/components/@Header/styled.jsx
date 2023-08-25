import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 10%;
  background: rgb(100,0,160);
  background: linear-gradient(90deg, rgba(100,0,160,1) 0%, rgba(14,14,82,1) 100%);
`;

export const LogoContainer = styled.div`
  display: flex;
  width: 30%;
  height: 100%;
`

export const TitleContainer =  styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 100%;
  color: #f4f4f8;
`

export const UserContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 30%;
  height: 100%;
  & .UserButton{
    border: none;
    background: none;
    color: #f4f4f8;
    &:hover{
      cursor: pointer;
    }
  }
`

