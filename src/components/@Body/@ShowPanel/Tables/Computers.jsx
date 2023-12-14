import React from "react";
import { ReactDOM } from "react";
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
    TableToolbarContent,
    TableContainer,
    Dropdown,
    OverflowMenu,
    OverflowMenuItem,
  } from "@carbon/react";
import { useDispatch, useSelector } from "react-redux";  
import { DATA_ACTIONS, LAPTOPS_SELECTOR } from "../../../../store/DATA";
import { Modal } from "../../@Modal";
import { LOCAL_DATA_ACTIONS, ROW} from "../../../../store/LOCAL_DATA";
import { EditModal } from "../../@Modal/EditForms";
import { Politics } from "../../../@Pdf/Politics";
import { PDFViewer } from '@react-pdf/renderer';

export default function LaptopTable() {
    const LAPTOPS = useSelector(LAPTOPS_SELECTOR);
    const items = ["BOP1", "BOP2"];
    const dispatch = useDispatch()
    const row = useSelector(ROW)

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
            getBatchActionProps,
            onInputChange,
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
                <Modal/>
                <EditModal/>
              </div>
              <TableToolbar style={{ display: "flex", alignItems: "flexEnd" }}>
                <TableToolbarContent>
                  <TableToolbarSearch
                    onChange={onInputChange}
                    tabIndex={
                      getBatchActionProps().shouldShowBatchActions ? -1 : 0
                    }
                  />
  
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
    <TableRow key={row.id} {...getRowProps({ row })}>
      {row.cells.map((cell) => (
        <TableCell key={cell.id}>{cell.value}</TableCell>
      ))}
      <TableCell className="cds--table-column-menu">
        <OverflowMenu style={{backgroundColor: "transparent"}} size="sm" flipped>
         <OverflowMenuItem itemText="Download" onClick={()=>downloadPDF()}></OverflowMenuItem>
          <OverflowMenuItem itemText="Edit" onClick={()=>{
             dispatch(LOCAL_DATA_ACTIONS.SetItem(row.id))
            dispatch(LOCAL_DATA_ACTIONS.SetShowModal(true)
            )}}></OverflowMenuItem>
          <OverflowMenuItem hasDivider itemText="Delete" isDelete onClick={()=>{
            dispatch(LOCAL_DATA_ACTIONS.setDeleteModal(true))
            dispatch(LOCAL_DATA_ACTIONS.setRow(row.id))
            }}></OverflowMenuItem>
        </OverflowMenu>
      </TableCell>
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


function downloadPDF(){
  ReactDOM.render(<Politics />, `${process.env.HOME}/downloads/example.pdf`);
}