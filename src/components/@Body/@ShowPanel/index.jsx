import React from "react";
import { useSelector } from "react-redux";
import { TABLE_SELECTOR } from "../../../store/LOCAL_DATA";
import LaptopTable from "./Tables/Computers";
import PhoneTable from "./Tables/Phones";
import PrinterTable from "./Tables/Printers";


export default function ShowPanel(propa) {
  const TableName = useSelector(TABLE_SELECTOR);

  return (
    <>
      {TableName === "Laptop" && <LaptopTable />}
      {TableName === "Printer" && <PrinterTable />}
      {TableName === "Phone" && <PhoneTable />}
    </>
  );
}
