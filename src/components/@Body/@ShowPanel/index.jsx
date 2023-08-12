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
  TableContainer
} from "@carbon/react";
import { useState } from "react";




const rows = [
  {
    id: "a",
    name: "Load balancer 1",
    status: "Disabled",
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
    key: "name",
    header: "Name",
  },
  {
    key: "status",
    header: "Status",
  },
];

export default function ShowPanel() {


  const [Nombre, CambioNombre] = useState("Andres")


  return (
    <>
      <Styled.MainContainer>
      <DataTable
  rows={rows}
  headers={headers}
  render={({ rows, headers, getHeaderProps, onInputChange }) => (
    <TableContainer title={Nombre}>
      <TableToolbar>
        {/* pass in `onInputChange` change here to make filtering work */}
        <TableToolbarSearch onChange={onInputChange} />
        <TableToolbarContent>
          <Button small kind="primary" onClick={()=> CambioNombre("Gustavo")}>
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
