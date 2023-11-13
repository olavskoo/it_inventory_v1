import React from "react";
import * as ReactDOM from 'react-dom';
import { useSelector} from "react-redux";
import { useState, useRef } from "react";
import LOCAL_DATA, { TABLE_SELECTOR, SHOW_MODAL_SELECTOR, LOCAL_DATA_ACTIONS } from "../../../../store/LOCAL_DATA";
import { Button, ModalHeader, ComposedModal, ModalBody } from "@carbon/react";
import EditLaptopForm from "./computers";
import EditScannerForm from "./scanners";
import { useDispatch } from "react-redux";
import EditPhoneForm from "./phones";
import EditPrinterForm from "./printers";
import * as Styled from "./styled"



export function EditModal(){
  const TableName = useSelector(TABLE_SELECTOR);
  const showModal = useSelector(SHOW_MODAL_SELECTOR)
  const dispatch = useDispatch()
  const button = useRef();
  /**
   * Simple state manager for modals.
   */
  const ModalStateManager = ({
    renderLauncher: LauncherContent,
    children: ModalContent
  }) => {
    const [open, setOpen] = useState(showModal);



    return <>
        {!ModalContent || typeof document === 'undefined' ? null : ReactDOM.createPortal(<ModalContent open={open} setOpen={setOpen} />, document.body)}
        {LauncherContent && <LauncherContent open={open} setOpen={setOpen} />}
</>;
  };
  return <ModalStateManager>
      {({
      open,
      setOpen
    }) => <ComposedModal open={open} onClose={() => {
      dispatch(LOCAL_DATA_ACTIONS.SetShowModal(false))
      setOpen(showModal);
    }} launcherButtonRef={button}>
<Styled.HeaderButton>
<ModalHeader title={TableName === "Printer" ? "Edit Printer Form" : TableName === "Phones" ?  "Edit Phone Form" : TableName === "Scanner" ?  "Edit Scanner Form" : "Edit Computer Form"}/>
</Styled.HeaderButton>
<Styled.ModalButtons>
<ModalBody>
      {TableName === "Laptop" && <EditLaptopForm />}
      {TableName === "Scanner" && <EditScannerForm />}
      {TableName === "Phones" && <EditPhoneForm />}
      {TableName === "Printer" && <EditPrinterForm />}
</ModalBody>
</Styled.ModalButtons>
</ComposedModal>}
</ModalStateManager>;
}