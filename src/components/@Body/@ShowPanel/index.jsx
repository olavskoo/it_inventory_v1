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
      <Styled.ToolbarContainer>
        <TableToolbar>
                <TableToolbarContent>
                <TableToolbarSearch></TableToolbarSearch>
                <Button hasIconOnly onClick style={{backgroundColor: "#6400A0"}}><i class="fa-solid fa-plus" style={{color: 'white'}}></i></Button>
                </TableToolbarContent>
                </TableToolbar>
        </Styled.ToolbarContainer>
        
        <DataTable rows={rows} headers={headers} isSortable >
          {({ rows, headers, getTableProps, getHeaderProps,getRowProps}) => (
            <Table {...getTableProps()}>
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
