import React from "react";
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



const rows = [
  {
    id: "a",
    userName: "",
    SSO: "Disabled",
    Department: "",
    Brand: "",
    Model: "",
    SerialNumber: ""
  },
  {
    id: "b",
    name: "Load balancer 2",
    status: "Starting",
  },
  {
    id: "c",
    name: "Load balancer 3",
    status: "Active",
  },
];
const headers = [
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




export default function ShowPanel() {

 
 
  return (
    <>
      <Styled.MainContainer>
      <DataTable
  rows={rows}
  headers={headers}
  render={({ rows, headers, getHeaderProps, onInputChange }) => (
    <TableContainer title="a">
      <TableToolbar>
        {/* pass in `onInputChange` change here to make filtering work */}
        <TableToolbarSearch onChange={onInputChange} />
        <TableToolbarContent>
          <Button small kind="primary">
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
