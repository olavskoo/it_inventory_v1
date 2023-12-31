import styled from "styled-components";

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
    border-radius: 2em;
    margin-right: .5em; 
    background-color: #6400A0;
}
& .cds--data-table-header{
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
}
h4 {
    color: #6400A0;
    font-size: 1.7rem;
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
    background-color: transparent;
    border-radius: 2em;
    margin-right: .5em;
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
& .cds--batch-actions--active{
    background: linear-gradient(90deg, rgba(100,0,160,1) 0%, rgba(14,14,82,1) 100%);
}
& .cds--batch-summary{
    background: rgb(100,0,160);
}
& .ActionButton{
    background-color: transparent;
}
& .cds--batch-summary__cancel{
    background-color: transparent;
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
    border-radius: 2em;
    margin-right: .5em; 
    background-color: #6400A0;
}
& .cds--data-table-header{
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
}
h4 {
    color: #6400A0;
    font-size: 1.7rem;
}
`
export const Delete = styled.div`
    & .cds--btn{
        border-radius: 2em;
        margin-right: .5em; 
        background-color: red;
    } 
`
export const HeaderButton = styled.div`
    & .cds--modal-header__heading{
        color: #6400A0;
    }
    & .cds--modal-close{
        border: none;
    }
    &:hover .cds--modal-close{
        cursor: auto;
        background-color: #f4f4f4;
    }
    & .cds--modal-close__icon{
        fill: none;
    }
`