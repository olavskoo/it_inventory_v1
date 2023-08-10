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
} from "@carbon/react";
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
  return (
    <>
      <Styled.MainContainer>
        <DataTable rows={rows} headers={headers} isSortable >
          {({ rows, headers, getTableProps, getHeaderProps, getRowProps, onInputChange}) => (
            <Table {...getTableProps()}>
              <TableHead>
                <TableToolbar>
                <TableToolbarSearch onChange={onInputChange}></TableToolbarSearch>
                <Button><i class="fa-solid fa-plus" style={{color: '#4200A0'}}></i></Button>
                </TableToolbar>
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
                  <TableRow {...getRowProps({ row })}>
                    {row.cells.map((cell) => (
                      <TableCell key={cell.id}>{cell.value}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </DataTable>
      </Styled.MainContainer>
    </>
  );
}
