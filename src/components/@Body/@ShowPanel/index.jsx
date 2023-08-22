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

const [table, setTable] = useState("Laptop")

 function LaptopTable(){

  //////////////////////////////////////////LAPTOPS ROWS & HEADER///////////////////////////////////////////////////////////
  const laptopRows = [
    {
      id: "a",
      userName: "laptop.UserName",
      SSO: "laptop.SSO",
      Department: "laptop.Department",
      Brand: "laptop.Brand",
      Model: "laptop.Model",
      SerialNumber: "laptop.SerialNumber"
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

  return
  ///////////////////////////////LAPTOP TABLE/////////////////////////////////////////////////////////
      <Styled.LaptopTable>
      <DataTable
  rows={laptopRows}
  headers={laptopHeaders}
  render={({ rows, headers, getHeaderProps, onInputChange }) => (
    <TableContainer title="Computers">
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
      </Styled.LaptopTable>
}

function PrinterTable(){
  //////////////////////////////////////////LAPTOPS ROWS & HEADER///////////////////////////////////////////////////////////
  const laptopRows = [
    {
      id: "a",
      userName: "laptop.UserName",
      SSO: "laptop.SSO",
      Department: "laptop.Department",
      Brand: "laptop.Brand",
      Model: "laptop.Model",
      SerialNumber: "laptop.SerialNumber"
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

    ///////////////////////////////PRINTER TABLE/////////////////////////////////////////////////   
<Styled.PrinterTable>
      <DataTable
  rows={laptopRows}
  headers={laptopHeaders}
  render={({ rows, headers, getHeaderProps, onInputChange }) => (
    <TableContainer title="Computers">
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
   //////////////////////////////////////////LAPTOPS ROWS & HEADER///////////////////////////////////////////////////////////
   const laptopRows = [
    {
      id: "a",
      userName: "laptop.UserName",
      SSO: "laptop.SSO",
      Department: "laptop.Department",
      Brand: "laptop.Brand",
      Model: "laptop.Model",
      SerialNumber: "laptop.SerialNumber"
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
  /////////////////////////////////PHONES////////////////////////////////////////////////   
<Styled.Phones>
      <DataTable
  rows={laptopRows}
  headers={laptopHeaders}
  render={({ rows, headers, getHeaderProps, onInputChange }) => (
    <TableContainer title="Computers">
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
      </Styled.Phones> 
)}

export default function ShowPanel(propa) { 

 
  return (
    <>
        {table === 'Laptop && <LaptopTable/>'}
        {table === 'Printer && <PrinterTable/>'}
        {table === 'Phone && <PhoneTable/>'}
    </>
  );
}


