import styled from "styled-components"

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 98%;
    height: 95%;
    border-radius: 20px;
`

export const LaptopTable = styled.div`
font-family: GE Inspira Sans;
display: flex;
flex-direction: column;
width: 98%;
height: 95%;
box-shadow: -20px 7px 30px 10px rgba(0,0,0,0.2);
border-radius: 20px;
& .cds--search-input:focus{
    outline: none;
    background: linear-gradient(white, white) padding-box,
    linear-gradient(to right, darkblue, darkorchid) border-box;
border-radius: 2em;
border: 2px solid transparent;
}
& .cds--btn{
    background-color: #6400A0;
}
& .cds--data-table-header{
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
}
& .cds--search-close{
   
    outline: none;
    background: transparent;
    
border-radius: 2em;
border: 2px solid linear-gradient(to right, darkblue, darkorchid) border-box;
}
h4 {
    color: #6400A0;
    font-size: 1.7rem;
}
& .cds--btn{
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2em;
    margin-right: .5em;
}
& .test{
    width: 10%;
    height: 100%;
}
`

export const PrinterTable = styled.div`
font-family: GE Inspira Sans;
display: flex;
flex-direction: column;
width: 98%;
height: 95%;
box-shadow: -20px 7px 30px 10px rgba(0,0,0,0.2);
border-radius: 20px;
& .cds--search-input:focus{
    outline: none;
    background: linear-gradient(white, white) padding-box,
    linear-gradient(to right, darkblue, darkorchid) border-box;
border-radius: 2em;
border: 2px solid transparent;
}
& .cds--btn{
    background-color: #6400A0;
}
& .cds--data-table-header{
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
}
& .cds--search-close{
   
    outline: none;
    background: transparent;
    
border-radius: 2em;
border: 2px solid linear-gradient(to right, darkblue, darkorchid) border-box;
}
h4 {
    color: #6400A0;
    font-size: 1.7rem;
}

`

export const PhoneTable = styled.div`
font-family: GE Inspira Sans;
display: flex;
flex-direction: column;
width: 98%;
height: 95%;
box-shadow: -20px 7px 30px 10px rgba(0,0,0,0.2);
border-radius: 20px;
& .cds--search-input:focus{
    outline: none;
    background: linear-gradient(white, white) padding-box,
    linear-gradient(to right, darkblue, darkorchid) border-box;
border-radius: 2em;
border: 2px solid transparent;
}
& .cds--btn{
    background-color: #6400A0;
}
& .cds--data-table-header{
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
}
& .cds--search-close{
   
    outline: none;
    background: transparent;
    
border-radius: 2em;
border: 2px solid linear-gradient(to right, darkblue, darkorchid) border-box;
}
h4 {
    color: #6400A0;
    font-size: 1.7rem;
}

`

export const ToolbarContainer = styled.div`
    display: flex;
    align-items: flex-end;
    width: 100%;
    height: auto;
    background-color: red;
`

export const TableContainer = styled.div`
    display: flex;
    width: auto%;
    height: 100%;
`