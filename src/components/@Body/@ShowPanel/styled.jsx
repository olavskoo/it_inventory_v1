import styled from "styled-components"

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 98%;
    height: 95%;
    border: 2px solid #6400A0;
`

export const LaptopTable = styled.div`
display: flex;
flex-direction: column;
width: 98%;
height: 95%;
border: 2px solid #6400A0;
& .cds--search-input:focus{
    outline-color: #6400A0;
}
& .cds--btn{
    background-color: #6400A0;
}

`

export const PrinterTable = styled.div`
display: flex;
flex-direction: column;
width: 98%;
height: 95%;
border: 2px solid #6400A0;
& .cds--search-input:focus{
    outline-color: #6400A0;
}
& .cds--btn{
    background-color: #6400A0;
}
`

export const PhoneTable = styled.div`
display: flex;
flex-direction: column;
width: 98%;
height: 95%;
border: 2px solid #6400A0;
& .cds--search-input:focus{
    outline-color: #6400A0;
}
& .cds--btn{
    background-color: #6400A0;
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