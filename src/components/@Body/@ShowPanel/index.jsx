import React, { useEffect } from "react";
import * as Styled from "./styled";
import {
  DataTable,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  TableToolbar,
  TableToolbarSearch,
  Button,
  TableToolbarContent,
  TableContainer,
} from "@carbon/react";
import { useSelector } from "react-redux";
import { useState } from "react";



// function TableSelector(){



 

//   return(rows, headers)

// }

export default function ShowPanel() {  

  ///////////////////////// UseSelectors ///////////////////////////////
  const laptop = useSelector((state)=> state.laptop);
  const phone = useSelector((state)=> state.phone);
  const printer = useSelector((state)=> state.printer);



  ///////////////////////// Tables ////////////////////////////////////
  const laptopRows = [
    {
      id: "a",
      userName: laptop.UserName,
      SSO: laptop.SSO,
      Department: laptop.Department,
      Brand: laptop.Brand,
      Model: laptop.Model,
      SerialNumber: laptop.SerialNumber
    },
  ];
  const laptopHeaders = [
    {
      key: "userName",
      header: "User Name",
    },
    {
      key: "SSO",
      header: "SSO",
    },
    {
      key: "Department",
      header: "Department",
    },
    {
      key: "Brand",
      header: "Brand",
    },
    {
      key: "Model",
      header: "Model",
    },
    {
      key: "SerialNumber",
      header: "Serial Number",
    },
  ];

  const phonesRows = [
    {
      id: "a",
      userName: phone.UserName,
      SSO: phone.SSO,
      Department: phone.Department,
      Brand: phone.Brand,
      Model: phone.Model,
      IMEI: phone.IMEI
    },
  ];
  const phonesHeaders = [
    {
      key: "userName",
      header: "User Name",
    },
    {
      key: "SSO",
      header: "SSO",
    },
    {
      key: "Department",
      header: "Department",
    },
    {
      key: "Brand",
      header: "Brand",
    },
    {
      key: "Model",
      header: "Model",
    },
    {
      key: "IMEI",
      header: "IMEI",
    },
  ];

  const printersRows = [
    {
      id: "a",
      Name: printer.Name,
      AssetNumber: printer.AssetNumber,
      SerialNumber: printer.SerialNumber,
      IP: printer.IP,
      Area: printer.Area,
      Brand: printer.Brand,
      Model: printer.Model
    },
    
  ];
  const PrintersHeaders = [
    {
      key: "Name",
      header: "Name",
    },
    {
      key: "AssetNumber",
      header: "Asset Number",
    },
    {
      key: "SerialNumber",
      header: "Serial Number",
    },
    {
      key: "IP",
      header: "IP",
    },
    {
      key: "Area",
      header: "Area",
    },
    {
      key: "Brand",
      header: "Brand",
    },
    {
      key: "Model",
      header: "Model"
    }
  ];
 
  const [rows, changeRows] = useState(laptopRows);
  const [headers, changeHeaders] = useState(laptopHeaders);

  return (
    <>
      <Styled.MainContainer>
      <DataTable
  rows={rows}
  headers={headers}
  render={({ rows, headers, getHeaderProps, onInputChange }) => (
    <TableContainer title="Computers">
      <TableToolbar>
        {/* pass in `onInputChange` change here to make filtering work */}
        <TableToolbarSearch onChange={onInputChange} />
        <TableToolbarContent>
          <Button small="true" kind="primary" onClick={()=>{
            changeRows(phonesRows);
            changeHeaders(phonesHeaders);
          }}>
            new user
          </Button>
        </TableToolbarContent>
      </TableToolbar>
      <Table>
        <TableHead>
          <TableRow>
            {headers.map((header) => (
              <TableHeader {...getHeaderProps({ header })}>
                {header.header}
              </TableHeader>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              {row.cells.map((cell) => (
                <TableCell key={cell.id}>{cell.value}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )}
/>
      </Styled.MainContainer>
    </>
  );
}
