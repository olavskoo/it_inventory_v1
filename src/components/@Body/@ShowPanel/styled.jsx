import styled from "styled-components"

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 98%;
    height: 95%;
    border-radius: 20px;
`

export const LaptopTable = styled.div`
display: flex;
flex-direction: column;
width: 98%;
height: 95%;
box-shadow: -20px 7px 30px 10px rgba(0,0,0,0.2);
border-radius: 20px;
& .cds--search-input:focus{
    outline-color: #6400A0;
}
& .cds--btn{
    background-color: #6400A0;
}
& .cds--data-table-header{
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
}

`

export const PrinterTable = styled.div`
display: flex;
flex-direction: column;
width: 98%;
height: 95%;
box-shadow: -20px 7px 30px 10px rgba(0,0,0,0.2);
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
box-shadow: -20px 7px 30px 10px rgba(0,0,0,0.2);
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