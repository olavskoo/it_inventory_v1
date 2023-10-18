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
import { useDispatch, useSelector } from "react-redux";  
import { DATA_ACTIONS, LAPTOPS_SELECTOR } from "../../../../store/DATA";
import { Modal } from "../../@Modal";
import { EditModal } from "../../@Modal/EditForms";
import { LOCAL_DATA_ACTIONS } from "../../../../store/LOCAL_DATA";


export default function LaptopTable() {
    const LAPTOPS = useSelector(LAPTOPS_SELECTOR);
    const items = ["BOP1", "BOP2"];
    const dispatch = useDispatch()
    //////////////////////////////////////////LAPTOPS ROWS & HEADER///////////////////////////////////////////////////////////
    // const laptopRows = [
    //   {
    //     id: "a",
    //     userName: LAPTOPS[0].USERNAME,
    //     SSO: LAPTOPS[0].SSO,
    //     Department: LAPTOPS[0].DEPARTMENT,
    //     Brand: LAPTOPS[0].BRAND,
    //     Model: LAPTOPS[0].MODEL,
    //     SerialNumber: LAPTOPS[0].SERIAL_NUMBER,
    //   },
    //   {
    //     id: "b",
    //     userName: LAPTOPS[1].USERNAME,
    //     SSO: LAPTOPS[1].SSO,
    //     Department: LAPTOPS[1].DEPARTMENT,
    //     Brand: LAPTOPS[1].BRAND,
    //     Model: LAPTOPS[1].MODEL,
    //     SerialNumber: LAPTOPS[1].SERIAL_NUMBER,
    //   },
    // ];
    const laptopHeaders = [
      {
        key: "UserName",
        header: "User Name",
      },
      {
        key: "sso",
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
    return (
      ///////////////////////////////LAPTOP TABLE/////////////////////////////////////////////////////////
      <Styled.LaptopTable>
        <DataTable
          rows={LAPTOPS}
          headers={laptopHeaders}
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
            <TableContainer title="Computers">
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
                    onClick={() => {
                      dispatch(DATA_ACTIONS.deleteLaptop(selectedRows[0].id))}}
                  >
                    Delete
                  </TableBatchAction>
                  <TableBatchAction
                    className="ActionButton"
                    tabIndex={
                      getBatchActionProps().shouldShowBatchActions ? 0 : -1
                    }
                    onClick={() => {dispatch(DATA_ACTIONS.setItem(selectedRows[0].id))}}
                  >
                    <EditModal/>
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
                    <div></div>
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
                      <TableSelectRow  {...getSelectionProps({ row })} />
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

export function test(SelectedId){

  return SelectedId
} 