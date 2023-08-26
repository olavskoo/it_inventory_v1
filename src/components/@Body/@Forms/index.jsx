import React from "react";
import * as Styled from "./styled";
import {ModalHeader, ComposedModal, ModalBody, ModalFooter, Form, Stack, TextInput, TextArea, Select,SelectItem, Button, Dropdown} from "@carbon/react";
import { useState, useRef } from "react";
import * as ReactDOM from 'react-dom';

export function LaptopForm() {

const departmentItems=["IT","QA","Manufacture","Training","Production","Warehouse","Lean","Manteinance","HR","Finance"]
const brandItems=["DELL","HP","Apple"]
const siteItems=["BOP1","BOP2"]


  return(<>
      <Form>
        <Stack gap={7}>
        <TextInput
            helperText="Optional helper text here; if message is more than one line text should wrap (~100 character count maximum)"
            id="Username"
            invalidText="Invalid error message."
            labelText="User"
            placeholder="Name and surname"
          />
          <TextInput
            helperText="Optional helper text here; if message is more than one line text should wrap (~100 character count maximum)"
            id="Sso"
            invalidText="Invalid error message."
            labelText="SSO"
            placeholder="Enter SSO"
          />
          <Dropdown
          id="Department"
          label="Select Department"
          items={departmentItems}
          />
          <Dropdown
          id="Department"
          label="Select Brand"
          items={brandItems}
          />
          <TextInput
            helperText="Optional helper text here; if message is more than one line text should wrap (~100 character count maximum)"
            id="SerialNumber"
            invalidText="Invalid error message."
            labelText="Serial Number"
            placeholder="Enter Serial Number"
          />
           <Dropdown
          id="Site"
          label="Select Site"
          items={siteItems}
          />
        </Stack>
      </Form>
  </>);
}


export function Modal(){
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
<ModalHeader label="Account resources" title="Add a custom domain" />
<ModalBody>
<LaptopForm/>
</ModalBody>
<ModalFooter primaryButtonText="Add" secondaryButtonText="Cancel" />
</ComposedModal>}
</ModalStateManager>;
}