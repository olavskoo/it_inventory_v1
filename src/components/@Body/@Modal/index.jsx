import React from "react";
import * as ReactDOM from 'react-dom';
import { useSelector} from "react-redux";
import { useState, useRef } from "react";
import { TABLE_SELECTOR } from "../../../store/LOCAL_DATA";
import { Button, ModalHeader, ComposedModal, ModalBody } from "@carbon/react";
import { LOCAL_DATA_ACTIONS, MODAL_SELECTOR } from "../../../store/LOCAL_DATA";
import { useDispatch } from "react-redux";
import LaptopForm from "./Forms/computers";
import ScannerForm from "./Forms/scanners";
import PhoneForm from "./Forms/phones";
import PrinterForm from "./Forms/printers";
import * as Styled from "./Forms/styled"



export function Modal(){
  const TableName = useSelector(TABLE_SELECTOR);
  const Modal = useSelector(MODAL_SELECTOR)
  const button = useRef();
  const dispatch = useDispatch();
  /**
   * Simple state manager for modals.
   */
  const ModalStateManager = ({
    renderLauncher: LauncherContent,
    children: ModalContent
  }) => {
    const [open, setOpen] = useState(Modal);



    return <>
        {!ModalContent || typeof document === 'undefined' ? null : ReactDOM.createPortal(<ModalContent open={open} setOpen={setOpen} />, document.body)}
        {LauncherContent && <LauncherContent open={open} setOpen={setOpen} />}
</>;
  };
  return <ModalStateManager renderLauncher={({
    setOpen
  }) => <Button ref={button} onClick={() => {
    dispatch(LOCAL_DATA_ACTIONS.setModal(true))
    setOpen(Modal)
    }}>
            {TableName === "Laptop" && <><div style={{color: "#6400A0"}}>...........</div><i class="fa-solid fa-plus"></i><div style={{color: "#6400A0"}}>.</div><i class="fa-solid fa-laptop"></i></>}
            {TableName === "Scanner" && <><div style={{color: "#6400A0"}}>...........</div><i class="fa-solid fa-plus"></i><div style={{color: "#6400A0"}}>..</div><i class="fa-solid fa-barcode"></i></>}
            {TableName === "Phones" && <><div style={{color: "#6400A0"}}>...........</div><i class="fa-solid fa-plus"></i><div style={{color: "#6400A0"}}>.</div><i class="fa-solid fa-mobile-screen-button"></i></>}
            {TableName === "Printer" && <><div style={{color: "#6400A0"}}>...........</div><i class="fa-solid fa-plus"></i><div style={{color: "#6400A0"}}>.</div><i class="fa-solid fa-print"></i></>}

            </Button>
}>
      {({
      open,
      setOpen
    }) => <ComposedModal preventCloseOnClickOutside open={open} onClose={() => {
      dispatch(LOCAL_DATA_ACTIONS.setModal(false))
      setOpen(Modal);
    }} launcherButtonRef={button}>
<Styled.HeaderButton>
<ModalHeader title={TableName === "Printer" ? "Printer Form" : TableName === "Phones" ?  "Phone Form" : TableName === "Scanner" ?  "Scanner Form" : "Computer Form"}/>
</Styled.HeaderButton>
<Styled.ModalButtons>
<ModalBody>
      {TableName === "Laptop" && <LaptopForm />}
      {TableName === "Scanner" && <ScannerForm />}
      {TableName === "Phones" && <PhoneForm />}
      {TableName === "Printer" && <PrinterForm />}      
</ModalBody>
</Styled.ModalButtons>
</ComposedModal>}
</ModalStateManager>;
}