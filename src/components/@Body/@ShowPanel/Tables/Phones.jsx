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
import { DATA_ACTIONS, PHONES_SELECTOR } from "../../../../store/DATA";
import { Modal } from "../../@Modal";
import { LOCAL_DATA_ACTIONS} from "../../../../store/LOCAL_DATA";
import { EditModal } from "../../@Modal/EditForms";


export default function PhoneTable() {
    const PHONES = useSelector(PHONES_SELECTOR);
    const items = ["BOP1", "BOP2"];
    const dispatch = useDispatch()

    const phoneHeaders = [
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
        key: "Imei",
        header: "IMEI",
      },
    ];

    return (
      ///////////////////////////////LAPTOP TABLE/////////////////////////////////////////////////////////
      <Styled.PhoneTable>
        <DataTable
          rows={PHONES}
          headers={phoneHeaders}
          render={({
            rows,
            headers,
            getHeaderProps,
            getRowProps,
            getBatchActionProps,
            onInputChange,
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
          <OverflowMenuItem hasDivider itemText="Delete" isDelete onClick={()=>dispatch(DATA_ACTIONS.deletePhone(row.id))}></OverflowMenuItem>
        </OverflowMenu>
      </TableCell>
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

export function test(SelectedId){

  return SelectedId
} 