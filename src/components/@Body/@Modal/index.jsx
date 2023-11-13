import React from "react";
import * as ReactDOM from 'react-dom';
import { useSelector} from "react-redux";
import { useState, useRef } from "react";
import { TABLE_SELECTOR } from "../../../store/LOCAL_DATA";
import { Button, ModalHeader, ComposedModal, ModalBody } from "@carbon/react";
import LaptopForm from "./Forms/computers";
import ScannerForm from "./Forms/scanners";
import PhoneForm from "./Forms/phones";
import PrinterForm from "./Forms/printers";



export function Modal(){
  const TableName = useSelector(TABLE_SELECTOR);
  const button = useRef();
  /**
   * Simple state manager for modals.
   */
  const ModalStateManager = ({
    renderLauncher: LauncherContent,
    children: ModalContent
  }) => {
    const [open, setOpen] = useState(false);



    return <>
        {!ModalContent || typeof document === 'undefined' ? null : ReactDOM.createPortal(<ModalContent open={open} setOpen={setOpen} />, document.body)}
        {LauncherContent && <LauncherContent open={open} setOpen={setOpen} />}
</>;
  };
  return <ModalStateManager renderLauncher={({
    setOpen
  }) => <Button ref={button} onClick={() => setOpen(true)}>
            {TableName === "Laptop" && <><div style={{color: "#6400A0"}}>...........</div><i class="fa-solid fa-plus"></i><div style={{color: "#6400A0"}}>.</div><i class="fa-solid fa-laptop"></i></>}
            {TableName === "Scanner" && <><div style={{color: "#6400A0"}}>...........</div><i class="fa-solid fa-plus"></i><div style={{color: "#6400A0"}}>..</div><i class="fa-solid fa-barcode"></i></>}
            {TableName === "Phones" && <><div style={{color: "#6400A0"}}>...........</div><i class="fa-solid fa-plus"></i><div style={{color: "#6400A0"}}>.</div><i class="fa-solid fa-mobile-screen-button"></i></>}
            {TableName === "Printer" && <><div style={{color: "#6400A0"}}>...........</div><i class="fa-solid fa-plus"></i><div style={{color: "#6400A0"}}>.</div><i class="fa-solid fa-print"></i></>}

            </Button>
}>
      {({
      open,
      setOpen
    }) => <ComposedModal open={open} onClose={() => {
      setOpen(false);
    }} launcherButtonRef={button}>
<ModalHeader title={TableName === "Printer" ? "Printer Form" : TableName === "Phones" ?  "Phone Form" : TableName === "Scanner" ?  "Scanner Form" : "Computer Form"}/>
<ModalBody>
      {TableName === "Laptop" && <LaptopForm />}
      {TableName === "Scanner" && <ScannerForm />}
      {TableName === "Phones" && <PhoneForm />}
      {TableName === "Printer" && <PrinterForm />}
      
      
</ModalBody>

</ComposedModal>}
</ModalStateManager>;
}