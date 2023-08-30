import React from "react";
import * as Styled from "./styled";
import {ModalHeader, ComposedModal, ModalBody, ModalFooter, Form, Stack, TextInput, TextArea, Select,SelectItem, Button, Dropdown} from "@carbon/react";
import { useState, useRef } from "react";
import * as ReactDOM from 'react-dom';
import { useSelector } from "react-redux";
import { TABLE_SELECTOR } from "../../../store/LOCAL_DATA";


export function LaptopForm() {

const departmentItems=["IT","QA","Manufacture","Training","Production","Warehouse","Lean","Manteinance","HR","Finance"]
const brandItems=["DELL","HP","Apple"]
const siteItems=["BOP1","BOP2"]


  return(<>
      <Form>
        <Stack gap={7}>
        <TextInput
            helperText="Only enter one name and one surname"
            id="Username"
            invalidText="Invalid error message."
            labelText="User"
            placeholder="Name Surname"
          />
          <TextInput
            helperText="Enter SSO"
            id="Sso"
            invalidText="Invalid error message."
            labelText="SSO"
            placeholder="Example: 999999999"
          />
          <Dropdown
          id="Department"
          label="Select Department"
          items={departmentItems}
          />
          <Dropdown
          id="Brand"
          label="Select Brand"
          items={brandItems}
          />
          <TextInput
            helperText="Enter the service tag of the PC"
            id="SerialNumber"
            invalidText="Invalid error message."
            labelText="Serial Number"
            placeholder="Enter Serial Number"
          />
           <Dropdown
          
          id="Site"
          labelText="Site"
          label="Select Site"
          items={siteItems}
          />
        </Stack>
      </Form>
  </>);
}

export function PhoneForm(){

  const departmentItems=["IT","QA","Manufacture","Training","Production","Warehouse","Lean","Manteinance","HR","Finance"]
const brandItems=["DELL","HP","Apple"]
const siteItems=["BOP1","BOP2"]


  return(<>
      <Form>
        <Stack gap={7}>
        <TextInput
            helperText="Only enter one name and one surname"
            id="Username"
            invalidText="Invalid error message."
            labelText="User"
            placeholder="Name Surname"
          />
          <TextInput
            helperText="Enter SSO"
            id="Sso"
            invalidText="Invalid error message."
            labelText="SSO"
            placeholder="Example: 999999999"
          />
          <Dropdown
          id="Department"
          label="Select Department"
          items={departmentItems}
          />
          <Dropdown
          id="Brand"
          label="Select Brand"
          items={brandItems}
          />
          <TextInput
            helperText="Enter the IMEI of the phone"
            id="IMEI"
            invalidText="Invalid error message."
            labelText="IMEI"
            placeholder="Enter IMEI"
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

export function PrinterForm(){

const brandItems=["ZEBRA","SATO",""]
const siteItems=["BOP1","BOP2"]
const areaItems=["Kilo","Case","Flex","V100"]

  return(<>
      <Form>
        <Stack gap={7}>
        <TextInput
            helperText="Enter Printer Name"
            id="Username"
            invalidText="Invalid error message."
            labelText="Printer name"
            placeholder="Hostname"
          />
          <TextInput
            helperText="Enter asset number"
            id="Sso"
            invalidText="Invalid error message."
            labelText="Asset number"
            placeholder="Z-xxx"
          />
          <TextInput
            helperText="Enter Serial Number"
            id="IMEI"
            invalidText="Invalid error message."
            labelText="Serial Number"
            placeholder="Serial Number"
          />
          <Dropdown
          id="Brand"
          label="Select Brand"
          items={brandItems}
          />
          <TextInput
            helperText="Enter model of the printer"
            id="Model"
            invalidText="Invalid error message."
            labelText="Printer Model"
            placeholder="ZT-420"
          />
          <TextInput
            helperText="Enter Printer IP"
            id="IMEI"
            invalidText="Invalid error message."
            labelText="Printer IP"
            placeholder="xxx.xxx.xxx.xxx"
          />
          <Dropdown
          id="Area"
          label="Select printer Area"
          items={areaItems}
          />
          <Dropdown
          helperText="Enter Site"
          id="Site"
          label="Select Site"
          items={siteItems}
          />

        </Stack>
      </Form>
  </>);

}

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
      {TableName === "Laptop" && <LaptopForm />}
      {TableName === "Printer" && <PrinterForm />}
      {TableName === "Phone" && <PhoneForm />}
</ModalBody>
<ModalFooter primaryButtonText="Add" secondaryButtonText="Cancel" />
</ComposedModal>}
</ModalStateManager>;
}