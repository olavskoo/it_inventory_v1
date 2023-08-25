import styled from "styled-components"

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 95%;
`
export const LinksContainer = styled.div`
    display: flex
    flex-direction: column;
    width: 100%;
    height: 90%;
`
export const LinksContent = styled.button`
position: relative; /* Make sure the ::after element is positioned relative to this button */
display: flex;
width: 100%;
height: 8%;
color: #6400A0;
border: none;
background: none;

/* Default state */
&::after {
  content: '';
  position: absolute;
  bottom: -1px; /* Position the slice border below the button */
  left: 0;
  width: 0;
  height: 1px; /* Adjust the height of the slice border */
 background: linear-gradient(90deg, rgba(0,219,255,1) 0%, rgba(54,0,252,1) 100%); /* Gradient color */
  transition: width 0.5s; /* Transition for the width property */
}

/* Hover state */
&:hover::after {
  width: 100%; /* Expand the width of the slice border on hover */
 background: linear-gradient(90deg, rgba(0,219,255,1) 0%, rgba(54,0,252,1) 100%); /* Gradient color on hover */
}

&:hover{
    color: #7014f2;
    transition: 0.5s;
    cursor: pointer;
}

`
export const LinksIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
    height: 100%;
    font-size: 1.2em;
`
export const LinksText = styled.div`
    display: flex;
    font-size: 90%;
    align-items: center;
    width: 65%;
    height: 100%;
    font-size: 1.2em;
`
export const Version = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;  
    width: 100%;
    height: 10%;
    color: #6400A0;
`