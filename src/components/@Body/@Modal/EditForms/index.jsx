import React from "react";
import * as ReactDOM from 'react-dom';
import { useSelector} from "react-redux";
import { useState, useRef } from "react";
import { TABLE_SELECTOR } from "../../../../store/LOCAL_DATA";
import { Button, ModalHeader, ComposedModal, ModalBody } from "@carbon/react";
import EditLaptopForm from "./computers";


export function EditModal(){
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
          Launch composed modal
</Button>}>
      {({
      open,
      setOpen
    }) => <ComposedModal open={open} onClose={() => {
      setOpen(false);
    }} launcherButtonRef={button}>
<ModalHeader title={TableName === "Printer" ? "Printer Form" : TableName === "Phone" ?  "Phone Form" : "Computer Form"}/>
<ModalBody>
      {TableName === "Laptop" && <EditLaptopForm />}
      {/* {TableName === "Printer" && <PrinterForm />}
      {TableName === "Phone" && <PhoneForm />} */}
</ModalBody>

</ComposedModal>}
</ModalStateManager>;
}