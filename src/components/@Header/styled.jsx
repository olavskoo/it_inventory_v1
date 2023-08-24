import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  height: 10%;
  background: rgb(100,0,160);
  background: linear-gradient(90deg, rgba(100,0,160,1) 0%, rgba(14,14,82,1) 100%);
`;

export const LeftContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 100%;
`;
export const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 100%;
`;
export const LeftContent = styled.div`
  display: flex;
  width: 95%;
  height: 93%;
`;
export const RightContent = styled.a`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 98%;
  height: 93%;
  color: #f4f4f8;
  &:hover{
    cursor: pointer;
  }
`;
export const RightContentIcon = styled.div`
  display: flex;
  align-items: flex-end;
  width: 3%;
  height: 50%;
`;
export const RightContentText = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 5%;
  height: 50%;
  margin-right: .5em;
`;
