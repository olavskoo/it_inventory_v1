import React from "react";
import * as Styled from "./styled"
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
    Dropdown,
    TableBatchAction,
    TableBatchActions,
    TableSelectRow,
    TableSelectAll,
  } from "@carbon/react";
import { LaptopForm, Modal } from "../../@Forms";


export default function PhoneTable() {
    const items = ["BOP1", "BOP2"];
    //////////////////////////////////////////PHONE ROWS & HEADER///////////////////////////////////////////////////////////
    const phoneRows = [
      {
        id: "a",
        userName: "phone.UserName",
        SSO: "phone.SSO",
        Department: "phone.Department",
        Brand: "phone.Brand",
        Model: "phone.Model",
        IMEI: "phone.IMEI",
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
  
    return (
      /////////////////////////////////PHONES////////////////////////////////////////////////
      <Styled.PhoneTable>
        <DataTable
          rows={phoneRows}
          headers={phoneHeaders}
          render={({
            rows,
            headers,
            getHeaderProps,
            getRowProps,
            getSelectionProps,
            getBatchActionProps,
            onInputChange,
            selectedRows,
          }) => (
            <TableContainer title="Phones">
              <div
                style={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "flex-end",
                  backgroundColor: "#F4F4F4",
                }}
              >
                <Dropdown
                  id="SiteSelector"
                  items={items}
                  initialSelectedItem={items[0]}
                  style={{ width: "15%", height: "100%" }}
                />
                <Modal />
              </div>
              <TableToolbar style={{ display: "flex", alignItems: "flexEnd" }}>
                {/* pass in `onInputChange` change here to make filtering work */}
  
                <TableBatchActions {...getBatchActionProps()}>
                  <TableBatchAction
                    className="ActionButton"
                    tabIndex={
                      getBatchActionProps().shouldShowBatchActions ? 0 : -1
                    }
                    onClick={() => console.log("clicked")}
                  >
                    Delete
                  </TableBatchAction>
                  <TableBatchAction
                    className="ActionButton"
                    tabIndex={
                      getBatchActionProps().shouldShowBatchActions ? 0 : -1
                    }
                    onClick={() => console.log("clicked")}
                  >
                    Edit
                  </TableBatchAction>
                  <TableBatchAction
                    className="ActionButton"
                    tabIndex={
                      getBatchActionProps().shouldShowBatchActions ? 0 : -1
                    }
                    onClick={() => console.log("clicked")}
                  >
                    Download
                  </TableBatchAction>
                </TableBatchActions>
  
                <TableToolbarContent>
                  <TableToolbarSearch
                    onChange={onInputChange}
                    tabIndex={
                      getBatchActionProps().shouldShowBatchActions ? -1 : 0
                    }
                  />
  
                  {/* <Button kind="ghost" style={{borderRadius: "2em", marginRight: '.5em'}}>
               <i class="fa-solid fa-user-plus" style={{color: "#ffffff"}}></i>
            </Button>  */}
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
                    <TableRow {...getRowProps({ row })}>
                      <TableSelectRow {...getSelectionProps({ row })} />
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
  