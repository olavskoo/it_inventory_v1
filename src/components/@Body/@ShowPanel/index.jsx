import React from "react";
import { useSelector } from "react-redux";
import { TABLE_SELECTOR } from "../../../store/LOCAL_DATA";
import LaptopTable from "./Tables/Computers";
import PrinterTable from "./Tables/Printers";
import ScannerTable from "./Tables/Scanners";
import PhoneTable from "./Tables/Phones";
import { Politics } from "../../@Pdf/Politics";
import { PDFViewer } from "@react-pdf/renderer";


export default function ShowPanel() {
  const TableName = useSelector(TABLE_SELECTOR);

  return (
    <>
      {TableName === "Laptop" && <LaptopTable/>}
      {TableName === "Phones" && <PhoneTable />}
      {TableName === "Printer" && <PrinterTable />}
      {TableName === "Scanner" && <ScannerTable />}
    </>
  );
}

//<PDFViewer><Politics/></PDFViewer>