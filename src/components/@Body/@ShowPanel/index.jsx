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
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { DATA_ACTIONS, LAPTOPS_SELECTOR } from "../../../store/DATA";
import { TABLE_SELECTOR } from "../../../store/LOCAL_DATA";


 function LaptopTable(){

const LAPTOPS = useSelector(LAPTOPS_SELECTOR);
  //////////////////////////////////////////LAPTOPS ROWS & HEADER///////////////////////////////////////////////////////////
  const laptopRows = [
    {
      id: "a",
      userName: LAPTOPS[0].USERNAME,
      SSO: LAPTOPS[0].SSO,
      Department: LAPTOPS[0].DEPARTMENT,
      Brand: LAPTOPS[0].BRAND,
      Model: LAPTOPS[0].MODEL,
      SerialNumber: LAPTOPS[0].SERIAL_NUMBER
    },
    {
      id: "b",
      userName: LAPTOPS[1].USERNAME,
      SSO: LAPTOPS[1].SSO,
      Department: LAPTOPS[1].DEPARTMENT,
      Brand: LAPTOPS[1].BRAND,
      Model: LAPTOPS[1].MODEL,
      SerialNumber: LAPTOPS[1].SERIAL_NUMBER
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

  return(
  ///////////////////////////////LAPTOP TABLE/////////////////////////////////////////////////////////
      <Styled.LaptopTable>
      <DataTable
  rows={laptopRows}
  headers={laptopHeaders}
  render={({ rows, headers, getHeaderProps, onInputChange }) => (
    <TableContainer title="Computers">
      <TableToolbar  style={{ display: "flex", alignItems: "flexEnd"}}>
        {/* pass in `onInputChange` change here to make filtering work */}
        
        <TableToolbarContent>
        <TableToolbarSearch onChange={onInputChange}/>
          <Button kind="ghost">
             <i class="fa-solid fa-user-plus" style={{color: "#ffffff"}}></i>
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
      </Styled.LaptopTable>
      );
}

function PrinterTable(){
  const TableName = useSelector(TABLE_SELECTOR)
  //////////////////////////////////////////PRINTER ROWS & HEADER///////////////////////////////////////////////////////////
  const printerRows = [
    {
      id: "a",
      Name: "Printer.Name",
      AssetNumber: "printer.AssetNumber",
      SerialNumber: "printer.SerialNumber",
      Brand: "printer.Brand",
      Model: "printer.Model",
      IP: "printer.IP",
      Area: "printer.Area"
    },
  ];
  const printerHeaders = [
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
      key: "Brand",
      header: "Brand",
    },
    {
      key: "Model",
      header: "Model",
    },
    {
      key: "IP",
      header: "IP",
    },
    {
      key: "Area",
      header: "Area",
    }
  ];


  return(

    ///////////////////////////////PRINTER TABLE/////////////////////////////////////////////////   
<Styled.PrinterTable>
      <DataTable
  rows={printerRows}
  headers={printerHeaders}
  render={({ rows, headers, getHeaderProps, onInputChange }) => (
    <TableContainer title="Printers">
      <TableToolbar>
        {/* pass in `onInputChange` change here to make filtering work */}
        <TableToolbarSearch onChange={onInputChange} />
        <TableToolbarContent>
          <Button small="true" kind="primary">
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
      </Styled.PrinterTable> 

  )
}

function PhoneTable(){
   //////////////////////////////////////////PHONE ROWS & HEADER///////////////////////////////////////////////////////////
   const phoneRows = [
    {
      id: "a",
      userName: "phone.UserName",
      SSO: "phone.SSO",
      Department: "phone.Department",
      Brand: "phone.Brand",
      Model: "phone.Model",
      IMEI: "phone.IMEI"
    },
  ];
  const phoneHeaders = [
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

  return(
  /////////////////////////////////PHONES////////////////////////////////////////////////   
<Styled.PhoneTable>
      <DataTable
  rows={phoneRows}
  headers={phoneHeaders}
  render={({ rows, headers, getHeaderProps, onInputChange }) => (
    <TableContainer title="Phones">
      <TableToolbar>
        {/* pass in `onInputChange` change here to make filtering work */}
        <TableToolbarSearch onChange={onInputChange} />
        <TableToolbarContent>
          <Button small="true" kind="primary">
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
      </Styled.PhoneTable> 
);
}

export default function ShowPanel(propa) { 
  const TableName = useSelector(TABLE_SELECTOR)
 
  return (
    <>
      {TableName=== "Laptop" && <LaptopTable/>}
      {TableName=== "Printer" && <PrinterTable/>}
      {TableName=== "Phone" && <PhoneTable/>}
    </>
  );
}


