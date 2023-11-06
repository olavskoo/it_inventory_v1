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
    TableToolbarContent,
    TableContainer,
    Dropdown,
    OverflowMenu,
    OverflowMenuItem,
  } from "@carbon/react";
import { useDispatch, useSelector } from "react-redux";  
import { DATA_ACTIONS, PRINTERS_SELECTOR } from "../../../../store/DATA";
import { Modal } from "../../@Modal";
import { LOCAL_DATA_ACTIONS} from "../../../../store/LOCAL_DATA";
import { EditModal } from "../../@Modal/EditForms";


export default function PrinterTable() {
    const PRINTERS = useSelector(PRINTERS_SELECTOR);
    const items = ["BOP1", "BOP2"];
    const dispatch = useDispatch()

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
        key: "Ip",
        header: "IP",
      },
      {
        key: "Area",
        header: "Area",
      },
    ];

    return (
      ///////////////////////////////LAPTOP TABLE/////////////////////////////////////////////////////////
      <Styled.LaptopTable>
        <DataTable
          rows={PRINTERS}
          headers={printerHeaders}
          render={({
            rows,
            headers,
            getHeaderProps,
            getRowProps,
            getBatchActionProps,
            onInputChange,
          }) => (
            <TableContainer title="Printers">
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
          <OverflowMenuItem itemText="Download"></OverflowMenuItem>
          <OverflowMenuItem itemText="Edit" onClick={()=>{
             dispatch(LOCAL_DATA_ACTIONS.SetItem(row.id))
            dispatch(LOCAL_DATA_ACTIONS.SetShowModal(true)
            )}}></OverflowMenuItem>
          <OverflowMenuItem hasDivider itemText="Delete" isDelete onClick={()=>dispatch(DATA_ACTIONS.deletePrinter(row.id))}></OverflowMenuItem>
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